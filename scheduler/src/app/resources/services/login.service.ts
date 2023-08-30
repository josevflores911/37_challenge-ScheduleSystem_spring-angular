import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../models/User'

import { Token } from '../models/Token';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }

  public doLogin(requestLogin: User): Observable<Token> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const response = this.http
      .post<Token>(this.apiServerUrl + '/login', requestLogin, { headers })
      .pipe(
        tap((loginResponse: Token) => (this.authService.loginResponse = loginResponse))
      )

    response.subscribe((res) => {
      this.authService.saveToken(res.jwTtoken);

    })
    return response;
  }
}
