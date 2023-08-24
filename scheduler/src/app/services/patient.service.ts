import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
import { Patient } from '../models/Patient';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getTry():Observable<string>{
    return this.http.get(`${this.apiServerUrl}/patient/hello`, {responseType: 'text'});
  }

  public getPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.apiServerUrl}/patient/getall`);
  }

}
