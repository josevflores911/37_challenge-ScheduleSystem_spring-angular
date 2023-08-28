import { Component } from '@angular/core';
import { Address } from 'src/app/models/Address';
import { Agent } from 'src/app/models/Agent';
import { Patient, Status } from 'src/app/models/Patient';
import { AddressService } from 'src/app/services/address.service';
import { AgentService } from 'src/app/services/agent.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {

  patient?: Patient | null;

  date: Date = new Date();
  //date: string | undefined=new Date().toJSON().slice(0,10).replace(/-/g,'/');
  name: string = '';
  lastname: string = '';
  email: string = '';
  age: string = '';
  phone: string = '';

  address: Address[] | undefined;
  selectedaddress: Address = { state: '', description: '' };

  tempStatus: any = { code: '' };
  status: Status[] | undefined;
  selectedstatus: string = '';

  agent: Agent[] | undefined;
  selectedagent: Agent = { name: '', image: '' };


  constructor(
    private addressService: AddressService
    , private agentService: AgentService
    , private patientService: PatientService) {

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



  onDropdownChange(event: any) {
    // event will contain the selected value
    console.log('Selected Value:', event);
   
  }

  handleClick(arg: string) {

    var jsonString = JSON.stringify((this.selectedstatus));
    const jsonObject = JSON.parse(jsonString);

    const mediumValue = jsonObject.code;
    // console.log(mediumValue); // Output: MEDIUM

    this.patient = new Patient(
      this.name,
      this.lastname,
      this.date.toJSON().slice(0, 10),
      // this.date.toJSON().slice(0, 10).replace(/-/g, '/'),
      this.selectedaddress,
      this.selectedagent,
      this.age,
      mediumValue,
      this.phone,
      this.email
    )
   
    console.log(this.patient);

    this.patientService.addPatient(this.patient).subscribe(
      response => {
        console.log('Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Error:', error);
        // Handle errors
      }
    );

   
    /* console.log(this.date.toJSON().slice(0,10).replace(/-/g,'/'));
    console.log(this.name);
    console.log(this.lastname);
    console.log(this.email);
    console.log(this.age);
    console.log(this.phone===''?666:this.phone);
    console.log(this.selectedaddress);
    console.log(this.selectedagent);
    console.log(this.selectedstatus); */

  }
}
