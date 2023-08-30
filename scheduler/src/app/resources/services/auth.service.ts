import { Injectable } from '@angular/core';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse:Token | undefined;

  getToken():string { 
    const tokenStorage:string|null =localStorage.getItem('token')
    if(tokenStorage===null){
      return ''
    }else{
      return tokenStorage.replace(/"/g, '');
    }
  }

  saveToken(response:string){
    localStorage.setItem('token', JSON.stringify(response));
  }

  removeToken(){
    localStorage.removeItem("token")
  }

  
  
  
  //-----------------------------------------------
  public clear():void{
    this.loginResponse=undefined;
  }

  public isAuthenticated():boolean{
    return Boolean( this.loginResponse?.jwTtoken);
  }
}
