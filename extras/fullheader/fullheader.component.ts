/* import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/resources/services/auth.service';
import { LoginService } from 'src/app/resources/services/login.service';


@Component({
    selector: 'app-fullheader',
    templateUrl: './fullheader.component.html',
    styleUrls: ['./fullheader.component.css'],
})
export class FullHeaderComponent implements OnInit {

    items: MenuItem[] | undefined;
      
    constructor(
        private authService:AuthService
        ,private router:Router
        ,private route: ActivatedRoute){

        this.route.url.subscribe(segments => {
            const currentUrl = segments.map(segment => segment.path).join('/');
            const tokenActive=this.authService.getToken().option;
            if (currentUrl === 'table' && tokenActive===true) {
            
            }else{
             
            }
          });

    }
    
    validatorToken:boolean=this.authService.getToken().option;

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
                icon: 'pi pi-fw pi-power-off',
                routerLink: ['/home'],
                command(){
                    new AuthService().removeToken();
                }
            }
        ];

        
    }

    
    
}


 */