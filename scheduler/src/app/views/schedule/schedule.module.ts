 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ScheduleComponent } from './schedule.component';
import { PrimeNGModule } from 'src/app/primeng.module';
import { ScheduleRoutingModule } from './schedule-routing.module';


@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    PrimeNGModule,
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
 