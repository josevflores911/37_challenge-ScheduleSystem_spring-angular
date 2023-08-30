import { Component } from '@angular/core';
import { PatientService } from './resources/services/patient.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    public message:string='';
    
    constructor(private patientService: PatientService) { }

    ngOnInit() {
       // this.getMessageTest();
    }

    public getMessageTest(): void { 
        this.patientService.getTry().subscribe(
            (res:string)=>{
                this.message=res;
            },
            (error:HttpErrorResponse)=>{
                console.log(error.message);
            }
        )
    }

}




































