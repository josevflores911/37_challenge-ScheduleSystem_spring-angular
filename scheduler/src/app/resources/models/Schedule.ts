import { Patient } from "./Patient";

export class Schedule {
    id!: number;
    patient!:Patient | any
    department:string 
    date:Date | any

    constructor(patient:Patient, department:string, date:Date | undefined) {
        this.patient=patient
        this.department=department
        this.date=date
    }
}

export enum Department {
    GYNECOLOGIST,PEDIATRICS,ORTHOPEDIA,SURGEON

}