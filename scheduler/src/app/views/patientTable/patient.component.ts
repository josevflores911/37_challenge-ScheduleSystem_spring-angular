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
    this.patients.forEach((p) => {
      const matchingSchedule = this.schedules.find((s) => s.patient.id === p.id);
      if (matchingSchedule) {
        const {
          name,
          lastName,
          address: { state, description },
          agent: { name: agentName, image: agentImage },
          register,
          age,
          status,
        } = p;
  
        this.patientSchedules.push(
          new PatientSchedule(
            `${name} ${lastName}`,
            state,
            description,
            agentName,
            agentImage,
            register,
            age,
            status,
            matchingSchedule.department,
            matchingSchedule.date
          )
        );
      }
    });
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
