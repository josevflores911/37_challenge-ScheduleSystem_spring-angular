import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from 'src/app/resources/models/User';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user?:User | null;
  clave:string="";
  login:string="";

  constructor(private loginService:LoginService,private router:Router){  }


  handleClick(arg: string) {

    this.user=new User(this.clave,this.login);
    console.log(this.user)

    this.loginService.doLogin(this.user).subscribe(
      (data)=>{
        this.router.navigate(['/table']);  
      },
      error => {
        console.error('Error:', error);
      })
    
  }  
}
