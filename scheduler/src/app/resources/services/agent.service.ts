import { Injectable } from '@angular/core';
import { Agent } from '../models/Agent';
import { environment } from 'src/environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient,private authService:AuthService) { }


  //getAll
  public getAgents():Observable<Agent[]>{
    const token: string = this.authService.getToken().token;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.replace(/"/g, '')
    });

    return this.http.get<Agent[]>(`${this.apiServerUrl}/agent/getall`,{headers});
  }

  //getById
  public getAgentById(id:number):Observable<Agent>{
    return this.http.get<Agent>(`${this.apiServerUrl}/agent/get/${id}`);
  }
}
