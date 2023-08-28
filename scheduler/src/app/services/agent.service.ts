import { Injectable } from '@angular/core';
import { Agent } from '../models/Agent';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }


  //getAll
  public getAgents():Observable<Agent[]>{
    return this.http.get<Agent[]>(`${this.apiServerUrl}/agent/getall`);
  }

  //getById
  public getAgentById(id:number):Observable<Agent>{
    return this.http.get<Agent>(`${this.apiServerUrl}/agent/get/${id}`);
  }
}
