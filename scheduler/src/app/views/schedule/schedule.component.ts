import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PatientService } from 'src/app/resources/services/patient.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  message: string = '';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getMessageTest();
  }

  public getMessageTest(): void {
    this.patientService.getTry().subscribe(
      (res: any) => {
        this.message = JSON.stringify(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

}
