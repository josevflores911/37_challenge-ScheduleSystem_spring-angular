import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { AuthService } from './auth.service';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler) {
      const token = this.authService.token;
  
  
      //is null
      let userName = this.authService.userData.subscribe((res)=>{
        //console.log(res.userData+"holis")
      });
  
      
  
      if (!token) {
        return next.handle(request);
      }
  
      request = request.clone({
        //TODO?
        headers: request.headers
          .set('Authorization', 'Bearer ' + token)
          .set('x-user-details', 'TODO')
          .set('x-user-id', 'TODO'),
      });
  
      return next.handle(request);
    }
  }
  