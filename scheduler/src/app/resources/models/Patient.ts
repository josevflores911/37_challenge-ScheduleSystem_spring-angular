import { Address } from "./Address";
import { Agent } from "./Agent";

export class Patient {
    id?: number;
    name: string;
    lastName: string;
    register: string | Date;
    address: Address;
    agent: Agent;
    age: string;
    status: string;
    phone?: string;
    email: string;

    constructor(name:string, lastname:string, register:string, address:Address
        ,agent:Agent,age:string,status:string,phone:string,email:string) {
        
        this.name = name;
        this.lastName = lastname;
        this.register = register;
        this.address=address;
        this.agent=agent;
        this.age = age;
        this.status=status;
        this.phone=phone;
        this.email = email;
    }
}


export enum Status {
    HIGHER, MEDIUM, LOW, OTHER

}