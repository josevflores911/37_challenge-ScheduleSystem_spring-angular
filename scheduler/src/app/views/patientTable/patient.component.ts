import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Table } from 'primeng/table';

import { Patient } from 'src/app/resources/models/Patient';
import { PatientSchedule } from 'src/app/resources/models/PatientSchedule';
import { Schedule } from 'src/app/resources/models/Schedule';

import { PatientService } from 'src/app/resources/services/patient.service';
import { ScheduleService } from 'src/app/resources/services/schedule.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {


  public patients: Patient[] = []
  public schedules: Schedule[] = []
  public patientSchedules: PatientSchedule[] = []

  loadingA: boolean = true;
  loadingB: boolean = true;

  constructor(private patientService: PatientService, private scheduleService: ScheduleService) {
    this.initialize();

  }
  ngOnInit() {

  }

  async initialize() {
    await this.getAllPatients();
    await this.getAllSchedules();
    setTimeout(async () => {

      await this.getPatientScheduled()
    }, 1000);
  }


  async getPatientScheduled() {

    let result: [{
      fullname: string,
      addressState: string,
      addressDescription: string,
      agentName: string,
      agentImage: string,
      register: any,
      age: string,
      status: string,
      department: string,
      date: any
    }] = [{
      fullname: "",
      addressState: "",
      addressDescription: "",
      agentName: "",
      agentImage: "",
      register: "",
      age: "",
      status: "",
      department: "",
      date: ''
    }];

    const combinedData = this.patients.map(p => {

      const matchingSchedule = this.schedules.find(s => s.patient.id === p.id);

      if (matchingSchedule) {

        return result.push({
          fullname: p.name + ' ' + p.lastName,
          addressState: p.address.state,
          addressDescription: p.address.description,
          agentName: p.agent.name,
          agentImage: p.agent.image,
          register: p.register,
          age: p.age,
          status: p.status,
          department: matchingSchedule.department,
          date: matchingSchedule.date
        });
      }

      return null;
    });
    const conversion = result.slice(1, result.length)

    conversion.map(el => {
      this.patientSchedules = [
        ...this.patientSchedules,
        new PatientSchedule(el.fullname, el.addressState, el.addressDescription,
          el.agentName, el.agentImage, el.register, el.age,
          el.status, el.department, el.date)
      ];


    })


  }



  async getAllSchedules(): Promise<void> {
    await this.scheduleService.getAllSchedules().subscribe(
      (res: Schedule[]) => {
        this.schedules = res;
        this.loadingB = false
        console.log(this.schedules);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.loadingB = false
      }
    )
  }


  async getAllPatients(): Promise<void> {
    await this.patientService.getPatients().subscribe(
      (res: Patient[]) => {
        this.patients = res;

        this.loadingA = false
        console.log(this.patients);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.loadingA = false
      }
    )
  }

  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'higher':
        return 'danger';

      case 'low':
        return 'success';

      case 'medium':
        return 'info';

      case 'other':
        return 'warning';

      case 'medium':
        return null;
      default:
        return null;
    }
  }

  clear(table: Table) {
    table.clear();
  }
}
