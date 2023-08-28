import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsModule } from './components/components.module';
import { PrimeNGModule } from './primeng.module';

import { HomeComponent } from './views/home/home.component';
import { PatientService } from './services/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../trash/customer.service';
import { notificationService } from './services/notification.service';



import { RecordModule } from './views/patientRecord/record.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNGModule,
    BrowserAnimationsModule,



    RecordModule

    
  ],
  providers: [PatientService,CustomerService,notificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
