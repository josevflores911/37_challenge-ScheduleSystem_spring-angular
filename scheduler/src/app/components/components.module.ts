import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { PrimeNGModule } from './../primeng.module';
import { ToastComponent } from './toast/toast.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports: [
    PrimeNGModule
  ],
  exports: [
    HeaderComponent, 
   
    FooterComponent,
    ToastComponent,
    SidebarComponent
  ],
  declarations: [
    HeaderComponent,
   
    FooterComponent,
    ToastComponent,
    SidebarComponent
  ],
  providers: [],
})
export class ComponentsModule { }

