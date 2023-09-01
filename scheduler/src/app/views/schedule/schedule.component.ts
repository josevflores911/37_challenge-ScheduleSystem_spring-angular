import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/resources/models/Patient';
import { Department, Schedule } from 'src/app/resources/models/Schedule';
import { PatientService } from 'src/app/resources/services/patient.service';
import { ScheduleService } from 'src/app/resources/services/schedule.service';
import { SenderService } from 'src/app/resources/services/sender.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],

})
export class ScheduleComponent {

  message: string = '';//test controller

  receivedData: string | any;//dni to look patient
  selectedPatient: Patient=new Patient("","","","","","","",null,null,"") 
  schedule!: Schedule;
  date!: Date;

  tempDepartment: any = { code: '' };
  departments!: string;
  selectedDepartment: string = '';

  constructor(
    private patientService: PatientService
    , private scheduleService: ScheduleService
    , private senderService: SenderService
    , private router: Router) {

    this.receivedData = this.senderService.getData();


    this.tempDepartment = [
      { code: Department[1] },
      { code: Department[0] },
      { code: Department[2] },
      { code: Department[3] },
    ]
    this.initialize()

  }

  async initialize() {
    await this.getAllPatients();

  }
  getAllPatients() {
    this.patientService.getPatientByDNI(this.receivedData).subscribe((res) => {
      console.log("res")
      console.log(res)
      this.selectedPatient = res
      this.router.navigate(['/schedule']);
    },
      error => {
        //console.error('Error:', error);
      })
  }

  ngOnInit(): void {
    this.getMessageTest();
  }



  public handleClick(): void {
    var jsonString = JSON.stringify((this.departments));
    const jsonObject = JSON.parse(jsonString);
    const department = jsonObject.code;

    this.schedule = new Schedule(
      this.selectedPatient,
      department,
      this.date
    )

    this.scheduleService.addSchedule(this.schedule).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    )

    this.router.navigate(['/table']);
  }



  public getMessageTest(): void {
    /* this.patientService.getTry().subscribe(
      (res: any) => {
        this.message = JSON.stringify(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    ) */
  }
}
