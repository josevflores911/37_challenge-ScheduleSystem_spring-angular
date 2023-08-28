import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './record.component';
import { PrimeNGModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [
    RecordComponent
  ],
  imports: [
    PrimeNGModule,
    CommonModule,
    RecordRoutingModule
  ]
})
export class RecordModule { }
