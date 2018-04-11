import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],


})
export class ErrorComponent{

  err :String = this.loginService.getMessErr();
  refAcc:boolean = this.loginService.getIsAcc();
  
  
  constructor(private routeur: Router,
			  private loginService : LoginService
			  ) {}

  getBack(){
	 if(this.refAcc){
		this.routeur.navigate(["accueil"]);
	 }
	 else{
		this.routeur.navigate([""]);
	 }
  }

}
