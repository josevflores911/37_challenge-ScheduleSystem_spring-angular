import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { AuthService } from 'src/app/resources/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  visibleVar:boolean=true;
  
  constructor(){
    this.visibleVar
  }
  
  ngOnInit() {
        
  }
}
