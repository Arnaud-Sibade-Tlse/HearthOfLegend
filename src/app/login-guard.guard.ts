import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router,
                private loginService: LoginService) {}
    
    
    canActivate() {
    if (this.loginService.getAuth()) {
            this.router.navigate([""]);
            return false;
        } 
    else {
            return true;
    }
}
  
}
