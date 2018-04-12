import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
//import { AuthService } from '@angular/auth.service'

@Injectable()
export class LoginGuardGuard implements CanActivate {
    
    constructor(/*private authService: AuthService,*/ private router: Router,
                private loginService: LoginService) {}
    
    
    canActivate(): boolean {
    console.log('coucou');
    console.log(this.loginService.getAuth());
    if (this.loginService.getAuth()) {
            return true;
        } 
    else {
            this.router.navigate(["login"]);
            return false;
    }
}
  
}
