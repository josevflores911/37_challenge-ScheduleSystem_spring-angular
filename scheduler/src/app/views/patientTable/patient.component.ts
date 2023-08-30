import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Table } from 'primeng/table';

import { Patient } from 'src/app/resources/models/Patient';

import { PatientService } from 'src/app/resources/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  
  public patients!: Patient[]
 
  loading: boolean = true;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();      
  }


   getAllPatients(): void {

    this.patientService.getPatients().subscribe(
       async (res: Patient[]) => {
         this.patients = await res;
        this.loading=false
        console.log(this.patients);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.loading=false
      }
    )
  }

  clear(table: Table) {
    table.clear();
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


  
  public getPatientsById(): void { }
  public savePaients(): void { }
  public updatePatients(): void { }
  public deletePatients(): void { }


  

}
