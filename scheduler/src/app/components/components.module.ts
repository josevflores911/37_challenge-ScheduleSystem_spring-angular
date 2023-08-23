import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNGModule } from './../primeng.module';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  imports: [
    PrimeNGModule
  ],
  exports: [HeaderComponent, FooterComponent,ToastComponent],
  declarations: [
    HeaderComponent,

    FooterComponent,
    ToastComponent
  ],
  providers: [],
})
export class ComponentsModule { }

