import { Address } from "./Address";
import { Agent } from "./Agent";

export class Patient {
    id?: number;
    name: string;
    lastName: string;
    register: string | Date;
    age: string;
    phone: string;
    email: string;
    dni: string | any;
    status: string;
    address?: Address | any;
    agent: Agent | any;

    constructor(name: string, lastname: string, register: string
        , age: string, status: string, phone: string, email: string, address?: Address|null
        , agent?: Agent | null, dni?: string) {

        this.name = name;
        this.lastName = lastname;
        this.register = register;
        this.age = age;
        this.status = status;
        this.phone = phone;
        this.email = email;
        this.dni = dni;
        this.address = address;
        this.agent = agent;
    }

    clean() {
        return new Patient("", "", "", "", "", "", "", null, null, "")
    }
}

/* export interface PatientSchedule{
    name: string;
    status: string;
    address?: Address | any;
    agent: Agent | any;
    register: string | Date;
    age: string;
    department:string;
    date: string | Date;
} */


export enum Status {
    HIGHER, MEDIUM, LOW, OTHER

}