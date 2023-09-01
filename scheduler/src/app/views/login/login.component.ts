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

  user:User =new User('','');
  password:string="";
  username:string="";

  constructor(private loginService:LoginService,private router:Router){  }
  ngOnInit() {
  }

  ngOnDestroy(){
    
    location.reload();
  }

  handleClick(arg: string) {

    //this.user=new User(this.clave,this.login);
    this.user.password=this.password;
    this.user.username=this.username;
    console.log(this.user)

    this.loginService.doLogin(this.user).subscribe(
      (data)=>{
     /*    setTimeout(() => { */
          this.router.navigate(['/table']);
       /*  }, 1000);  */
       
      },
      error => {
        console.error('Error:', error);
      })
    
  }  
}
