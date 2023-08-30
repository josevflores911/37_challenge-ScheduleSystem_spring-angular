import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../models/Address';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient,private authService:AuthService) { }


  //getAll
  public getAddress():Observable<Address[]>{
    const token: string = this.authService.getToken().token;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.replace(/"/g, '')
    });

    return this.http.get<Address[]>(`${this.apiServerUrl}/address/getall`,{headers});
  }

  //getById
  public getAddressById(id:number):Observable<Address>{
    return this.http.get<Address>(`${this.apiServerUrl}/address/get/${id}`);
  }
}

