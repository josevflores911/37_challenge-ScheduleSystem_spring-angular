import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsModule } from './components/components.module';
import { PrimeNGModule } from './primeng.module';

import { TestComponent } from './test/test.component';
import { PatientService } from './services/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../trash/customer.service';
import { notificationService } from './services/notification.service';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNGModule
    
  ],
  providers: [PatientService,CustomerService,notificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
