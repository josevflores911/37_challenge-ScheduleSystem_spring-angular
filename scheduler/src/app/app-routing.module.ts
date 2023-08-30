import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PatientComponent } from './views/patientTable/patient.component';
import { AuthGuard, AuthGuardService } from './resources/services/auth-guard.service';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { RecordComponent } from './views/patientForm/record.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'table',
    //canActivate: [AuthGuard],
    component: PatientComponent
  },
  {
    path: 'patient',
    loadChildren: () => import('./views/patientForm/record.module').then((m) => m.RecordModule),
    //canActivate: [AuthGuard],
    //loadChildren: () => import('./views/schedule/schedule.module').then((m) => m.ScheduleModule),
  },
   {
    path: 'schedule',
    component:ScheduleComponent
    //canActivate: [AuthGuard],
    //loadChildren: () => import('./views/schedule/schedule.module').then((m) => m.ScheduleModule),
  }, 
  /* {
    path: 'home',
    canActivate:[AuthGuardService],
    component: HomeComponent
  }, */
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

