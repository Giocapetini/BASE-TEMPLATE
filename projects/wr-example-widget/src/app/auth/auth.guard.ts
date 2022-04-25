// Remove incase it's not used

import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
// import { AuthService } from 'example/auth/service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    // private authService: AuthService
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return !environment.enableAuth
    //  || this.authService.isAuthenticated();
  }
}
