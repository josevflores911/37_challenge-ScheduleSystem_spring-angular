import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/resources/models/Patient';
import { Department, Schedule } from 'src/app/resources/models/Schedule';
import { notificationService } from 'src/app/resources/services/notification.service';
import { PatientService } from 'src/app/resources/services/patient.service';
import { ScheduleService } from 'src/app/resources/services/schedule.service';
import { SenderService } from 'src/app/resources/services/sender.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  schedule: Schedule;

  message: string = ''; //test controller

  existPatient: boolean = false;

  receivedDNI: string | any; //dni to look patient
  selectedPatient: Patient = new Patient();
  date!: Date;

  tempDepartment: any = { code: '' };

  selectedDepartment: string = '';

  constructor(
    private patientService: PatientService,
    private scheduleService: ScheduleService,
    private senderService: SenderService,
    private router: Router,
    private toastService: notificationService
  ) {
    this.schedule = new Schedule();
    this.receivedDNI = this.senderService.getData();

    this.tempDepartment = [
      { code: Department[1] },
      { code: Department[0] },
      { code: Department[2] },
      { code: Department[3] },
    ];
    this.initialize();
  }

  initialize() {
    this.getPatients();
  }
  async getPatients() {
    this.patientService.getPatientByDNI(this.receivedDNI).subscribe({
      next: (res) => {
        this.selectedPatient = res;

        this.existPatient = !this.existPatient;
      },
      error: (error) => {
        //console.error('Error:', error);
      },
    });
  }

  ngOnInit(): void {
    this.getMessageTest();
  }

  public saveSchedule(): void {
    var jsonString = JSON.stringify(this.selectedDepartment);
    const jsonObject = JSON.parse(jsonString);
    const mediumValue = jsonObject.code;

    this.schedule.patient = this.selectedPatient;
    this.schedule.department = mediumValue;
    this.schedule.date = this.date;

    if (!this.checkPatient(this.selectedPatient.id)) {
      this.scheduleService.addSchedule(this.schedule).subscribe({
        next: (response) => {
          console.log('Response:', response);
        },
        error: (error) => {
          console.error(this.schedule);
          console.error('Error:', error);
        },
      });
    } else {
      this.toastService.showErrorToast('patient scheduled', 'wait until date');
    }

    this.router.navigate(['/table']);
  }

  private checkPatient(id: any): boolean {
    let validSchedule = null;
    this.scheduleService.getPatientById(id).subscribe((res) => {
      validSchedule = res.date;
    });

    console.log(validSchedule != null);

    return validSchedule != null;
  }

  public getMessageTest(): void {}
}
