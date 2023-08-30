import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* if (this.loginService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.loginService.getToken()}`
        }
      });
    } */
    return next.handle(request);
  }
}