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

  //getAll
  public getPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.apiServerUrl}/patient/getall`);
  }

  //getById
  public getPatientById(id:number):Observable<Patient>{
    return this.http.get<Patient>(`${this.apiServerUrl}/patient/get/${id}`);
  }

  //post(save)
  public addPatient(patient:Patient):Observable<Patient>{
    return this.http.post<Patient>(`${this.apiServerUrl}/patient/add`,patient);
  }

  //put(update)
  public updatePatient(patient:Patient,id:number):Observable<Patient>{
    return this.http.put<Patient>(`${this.apiServerUrl}/patient/update/${id}`,patient);
  }

  //delete
  public deletePatient(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/patient/delete/${id}`);
  }

  /*saveSport(payload: string, id: string) {

    const headers = new HttpHeaders();

    headers.set('Content-Type', 'application/json; charset=utf-8');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    if (id === null || id === '') {
      return this.httpClient.post<SportsClass>(
        config.apiEndpoints.sport.save,
        payload,
        httpOptions
      );
    }

    return this.httpClient.put<SportsClass>(
      config.apiEndpoints.sport.updateById(id),
      payload,
      httpOptions
    )
  }*/


}
