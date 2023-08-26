import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Patient } from 'src/app/models/Patient';
import { Customer, Representative } from 'src/trash/customer';
import { CustomerService } from 'src/trash/customer.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  public patients: Patient[] = [];


  customers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  constructor(private patientService: PatientService, private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllPatients();


    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }


  public getAllPatients(): void {
    this.patientService.getPatients().subscribe(
      (res: Patient[]) => {
        this.patients = res;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  public getPatientsById(): void { }
  public savePaients(): void { }
  public updatePatients(): void { }
  public deletePatients(): void { }


  


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

}
