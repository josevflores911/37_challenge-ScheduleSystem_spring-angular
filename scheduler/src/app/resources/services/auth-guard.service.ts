import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(private authService:AuthService,private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    return this.authService.isAuthenticated();
  }
}
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardService).canActivate(next, state);
}