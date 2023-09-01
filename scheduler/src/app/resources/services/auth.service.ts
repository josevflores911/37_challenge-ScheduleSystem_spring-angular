import { Injectable } from '@angular/core';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse:Token | any;

  getToken():menu { 
    const tokenStorage:string|null =localStorage.getItem('token')
    if(tokenStorage===null){
      return new menu('',false)
    }else{
      return new menu(tokenStorage.replace(/"/g, ''),true)
    }
  }

  saveToken(response:string){
    localStorage.setItem('token', JSON.stringify(response));
  }

  removeToken(){
    localStorage.removeItem("token");
    setTimeout(() => {
      location.reload();
    }, 10); 
  }

  
  
  
  //-----------------------------------------------
  public clear():void{
    this.loginResponse=undefined;
  }

  public isAuthenticated():boolean{
    return Boolean( this.loginResponse?.jwTtoken);
  }
}
export class menu{
  token:string
  option:boolean
  constructor(token:string,option:boolean){
    this.token=token
    this.option=option
  }
}