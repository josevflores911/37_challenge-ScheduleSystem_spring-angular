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

    constructor() {

        this.name = "";
        this.lastName = "";
        this.register = "";
        this.age = "";
        this.status = "";
        this.phone = "";
        this.email = "";
        this.dni = "";
        this.address = null;
        this.agent = null;
    }

    clean() {
        return new Patient()
    }


    validate(): string[] {

        let retornoError: string[] = [];
    
        if (this.name === "" || this.lastName==="") {
          retornoError.push('neither name or lastname cant be empty');
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if(!emailPattern.test(this.email)){
            retornoError.push('please insert valid email field');
        }
    
        if(parseInt(this.age)<0 || parseInt(this.age)>150){
            retornoError.push('please insert valid age');
        }
    
        return retornoError;
      }
    
}

export enum Status {
    HIGHER, MEDIUM, LOW, OTHER

}