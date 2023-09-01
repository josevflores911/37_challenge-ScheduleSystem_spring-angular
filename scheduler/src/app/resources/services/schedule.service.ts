import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { AuthService } from './auth.service';
import { Schedule } from '../models/Schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }


  //getAll
  public getAllSchedules(): Observable<Schedule[]> {

    const token: any = this.authService.getToken().token;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.replace(/"/g, '')
    });


    return this.http.get<Schedule[]>(`${this.apiServerUrl}/schedule/getall`, { headers });
  }

  //post(save)
  public addSchedule(schedule: Schedule): Observable<Schedule> {
    const token: string = this.authService.getToken().token ;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token.replace(/"/g, '')
    });
    return this.http.post<Schedule>(`${this.apiServerUrl}/schedule/add`, schedule, { headers });
  }

}
