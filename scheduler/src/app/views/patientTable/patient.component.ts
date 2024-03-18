import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

import { Patient } from 'src/app/resources/models/Patient';
import { PatientSchedule } from 'src/app/resources/models/PatientSchedule';
import { Schedule } from 'src/app/resources/models/Schedule';

import { PatientService } from 'src/app/resources/services/patient.service';
import { ScheduleService } from 'src/app/resources/services/schedule.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit, OnDestroy {
  public patients: Patient[] = [];
  public schedules: Schedule[] = [];
  public patientSchedules: PatientSchedule[] = [];

  loadingPatients: boolean = false;
  loadingSchedule: boolean = false;

  constructor(
    private patientService: PatientService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit() {
    this.starter();
  }

 
  async starter() {
    try {
      this.loadingPatients = true;
      this.loadingSchedule = true;

      await Promise.all([this.getAllPatients(), this.getAllSchedules()]);
      // this.getPatientScheduled();
    } catch (error) {
      console.error('Error fetching data:', error);
      // this.errorFetchingData = true;
    } finally {
      this.loadingPatients = false;
      this.loadingSchedule = false;
    }
  }

  ngOnDestroy() {
    // Realiza alguna limpieza si es necesario
  }

   getAllPatients(): void {
     this.loadingPatients = true;
     this.patientService.getPatients().subscribe({
       next: (res: Patient[]) => {
         this.patients = res;
         console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        this.loadingPatients = false;
      },
    });
  }

   getAllSchedules(): void {
    
    this.loadingSchedule = true;
    this.scheduleService.getAllSchedules().subscribe({
      next: (res: Schedule[]) => {
        this.schedules = res;
         this.getPatientScheduled();
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        this.loadingSchedule = false;
      },
    });
  }


   getPatientScheduled() {
    console.log('c');
     this.patients.forEach((p) => {
      const matchingSchedule = this.schedules.filter(
        (s) => s.patient.id === p.id
      ).forEach((e, i) => {
      
        if (e) {
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
            e.department,
            e.date
          )
        );
      }
        
      }
      );

       
    
     });
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

      default:
        return null;
    }
  }

  clear(table: Table) {
    table.clear();
  }
}
