import { Component } from '@angular/core';
import { PatientService } from './resources/services/patient.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './resources/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    public message:string='';

    validator:boolean;
    
    constructor(private patientService: PatientService,private authService:AuthService) { 
        this.validator=!authService.getToken().option
    }

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




































