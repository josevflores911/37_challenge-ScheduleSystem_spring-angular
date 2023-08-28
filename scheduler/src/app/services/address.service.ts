import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../models/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }


  //getAll
  public getAddress():Observable<Address[]>{
    return this.http.get<Address[]>(`${this.apiServerUrl}/address/getall`);
  }

  //getById
  public getAddressById(id:number):Observable<Address>{
    return this.http.get<Address>(`${this.apiServerUrl}/address/get/${id}`);
  }
}

