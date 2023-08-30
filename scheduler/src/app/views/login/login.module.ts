import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PrimeNGModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    PrimeNGModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
