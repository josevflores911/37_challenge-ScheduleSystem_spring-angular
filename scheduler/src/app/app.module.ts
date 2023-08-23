import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { ComponentsModule } from './components/components.module';
import { PrimeNGModule } from './primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    PrimeNGModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
