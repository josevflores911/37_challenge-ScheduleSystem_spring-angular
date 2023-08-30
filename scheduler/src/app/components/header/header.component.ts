import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/resources/services/auth.service';
import { LoginService } from 'src/app/resources/services/login.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    items: MenuItem[] | undefined;

    validator:boolean=false;
    
    constructor(private authService:AuthService){}
    
    validatorToken:boolean=this.authService.getToken()===''?this.validator:!this.validator;;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-file',
                routerLink: ['/home'],
            },
            {
                label: 'Patients',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/patient'],
                visible:this.validatorToken
            },
            {
                label: 'Schedule',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/schedule'],
                visible:this.validatorToken
            },
            {
                label: 'Table',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/table'],
                visible:this.validatorToken
            },
            {
                label: 'Login',
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/login'],
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}
