import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsModule } from './components/components.module';
import { PrimeNGModule } from './primeng.module';

import { HomeComponent } from './views/home/home.component';
import { PatientService } from './resources/services/patient.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { notificationService } from './resources/services/notification.service';

import { RecordModule } from './views/patientForm/record.module';
import { LoginComponent } from './views/login/login.component';

import { PatientComponent } from './views/patientTable/patient.component';
//import { ScheduleComponent } from './views/schedule/schedule.component';
import { AuthInterceptor } from './resources/services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PatientComponent
    //ScheduleComponent,
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
  providers: [
    PatientService,
     notificationService,
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
