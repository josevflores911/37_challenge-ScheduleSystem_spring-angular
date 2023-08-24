import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { ComponentsModule } from './components/components.module';
import { PrimeNGModule } from './primeng.module';

import { TestComponent } from './test/test.component';
import { PatientService } from './services/patient.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   TestComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNGModule
   
   

  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
