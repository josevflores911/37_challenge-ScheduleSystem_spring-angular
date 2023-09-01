import { Address } from "./Address";
import { Agent } from "./Agent";
import { Department } from "./Schedule";

export class PatientSchedule{
    name: string;
    status: string;
    addressState!: string ;
    addressDescription!: string | any;
    agentName: string | any;
    agentImage: string | any;
    register: string | Date;
    age: string;
    department:string;
    date: string | Date;

    constructor( name: string, addressState: string | any, addressDescription: string ,agentName: string | any
        ,agentImage: string | any,
        register: string | Date, age: string, status: string, department:string, date: string | Date){
            this.name=name;
            this.status=status;
            this.addressState=addressState;
            this.addressDescription=addressDescription;
            this.agentName=agentName;
            this.agentImage=agentImage;
            this.register=register;
            this.age=age;
            this.department=department;
            this.date=date;
        }
}