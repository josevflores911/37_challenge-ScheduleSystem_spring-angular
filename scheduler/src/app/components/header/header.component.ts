import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-file',
                routerLink: ['/home'],
//
            },
            {
                label: 'Patients',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/record'],
            },
            {
                label: 'Schedules',
                icon: 'pi pi-fw pi-user',

            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-calendar',

            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}
