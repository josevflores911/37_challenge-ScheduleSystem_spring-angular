import { Patient } from "./Patient";

export class Schedule {
    id!: number;
    patient:Patient 
    department:string 
    date:Date 

    constructor() {
        this.patient=new Patient
        this.department=''
        this.date=new Date()
    }
}

export enum Department {
    GYNECOLOGIST,PEDIATRICS,ORTHOPEDIA,SURGEON

}