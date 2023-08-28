import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNGModule } from './../primeng.module';
import { ToastComponent } from './toast/toast.component';
import { PatientComponent } from './patientTable/patient.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { helper } from '../../trash/helper';


@NgModule({
  imports: [
    PrimeNGModule
  ],
  exports: [HeaderComponent, FooterComponent,ToastComponent,PatientComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    PatientComponent,
    ScheduleComponent
    
  ],
  providers: [],
})
export class ComponentsModule { }

