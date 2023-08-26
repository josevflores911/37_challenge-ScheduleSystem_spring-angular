export interface Patient{
    id:number;
    name:string;
    lastName:string;
    register:string|Date;
    address:Address;
    agent?: Agent;
    age:number;
    status:Status;

    phone:number;
    email:string;
}

export interface Agent {
    name?: string;
    image?: string;
}

export interface Address {
    state?: string;
    description?: string;
}

export enum Status{
    HIGHER,MEDIUM,LOW,OTHER
    
}