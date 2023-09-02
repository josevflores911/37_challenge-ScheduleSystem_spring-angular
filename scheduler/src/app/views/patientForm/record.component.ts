import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/resources/models/Address';
import { Agent } from 'src/app/resources/models/Agent';
import { Patient, Status } from 'src/app/resources/models/Patient';
import { AddressService } from 'src/app/resources/services/address.service';
import { AgentService } from 'src/app/resources/services/agent.service';
import { notificationService } from 'src/app/resources/services/notification.service';
import { PatientService } from 'src/app/resources/services/patient.service';
import { SenderService } from 'src/app/resources/services/sender.service';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],

})
export class RecordComponent {

  patient: Patient = new Patient();

  date: Date = new Date();
  dni: string = '';

  address: Address[] | any | null;
  selectedaddress: Address | any;

  tempStatus: any = { code: '' };
  selectedstatus: string = '';

  agent: Agent[] | any;
  selectedagent: Agent | any;

  newRecord: boolean;


  constructor(
    private addressService: AddressService
    , private agentService: AgentService
    , private patientService: PatientService
    , private toastService: notificationService
    , private senderService: SenderService
    , private router: Router) {

    this.newRecord = false;

    addressService.getAddress().subscribe((res) => {
      this.address = res;
    });

    agentService.getAgents().subscribe((res) => {
      this.agent = res;
    });


    this.tempStatus = [
      { code: Status[1] },
      { code: Status[0] },
      { code: Status[2] },
      { code: Status[3] },
    ]

  }

  ngOnInit() {
  }


  public searchPatient(dni: string) {

    this.patientService.getPatientByDNI(dni).subscribe((res) => {
      this.toastService.showSuccessToast("patient found")
      this.senderService.setData(dni);
      this.router.navigate(['/schedule']);
    },
      error => {
        if (dni !== '') {
          this.newRecord = !this.newRecord
          this.toastService.showErrorToast("not found", "insert a new record")
        } else {
          this.toastService.showErrorToast("fill 14 digits")

        }

        //console.error('Error:', error);
      })

    

  }


  public savePatient(arg: string) {

    var jsonString = JSON.stringify((this.selectedstatus));
    const jsonObject = JSON.parse(jsonString);
    const mediumValue = jsonObject.code;

    this.patient.register = this.date.toJSON().slice(0, 10);
    this.patient.address = this.selectedaddress;
    this.patient.agent = this.selectedagent;
    this.patient.status = mediumValue;
    this.patient.dni = this.dni

    //this.phone.replace(/\D/g, ''),

    console.log(this.patient);

    let errorLog = this.patient.validate()

    if (errorLog.length === 0) {
      this.patientService.addPatient(this.patient).subscribe(
        response => {
          console.log('Response:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );

      this.senderService.setData(this.dni);
      this.patient = this.patient.clean()
      this.router.navigate(['/schedule']);
      this.toastService.showSuccessToast("recorded")
    } else {

      errorLog.forEach((res) => {
        this.toastService.showErrorToast(
          res,
          'please, fix this errors and try again'
        );
      });

    }

  }

  goBack() {
    this.newRecord = !this.newRecord
  }



  onDropdownChange(event: any) {

  }
}
