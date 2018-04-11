import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import 'rxjs/Rx';

@Component({
  selector: 'loginHoL',
  templateUrl: './login.component.html',
  styleUrls: ['./css/login.css','./css/normalize.min.css','./css/titillium.css']
})
export class LoginComponent {
    
    pseudo: string;
    id : string;
    token: string;
    
    messErreur: string;
	redirectLog:boolean = true;
    
	constructor(private routeur: Router,
				private http : Http
				) { }

	seConnecter(){
		var mail= (<HTMLInputElement>document.getElementById("mailCo")).value;
		var mdp= (<HTMLInputElement>document.getElementById("passCo")).value;
		// Si on crypte le mdp, comment est-il décrypter côté serveur ?
		if(mail != "" && mdp != ""){
			this.http.get("https://los.ling.fr/users/connect?email="+mail+"&password="+mdp)
			.subscribe(data => {
						var resp = JSON.parse(data["_body"].toString());
						if(resp.status=="ok"){
                            this.setDataUsr(resp.data.id,resp.data.name,resp.data.token);
							this.routeur.navigate(["accueil"]);
						}
						else{
                            this.setMessErr(resp.data.message);
							this.routeur.navigate(["error"]);
						}
					
					}, error => {
						console.log('http error', error);
					});			
		}
	}
    
    setDataUsr(id,name,token){
        this.pseudo = name;
        this.id = id;
        this.token = token;
    }
	
	setMessErr(messErr){
        this.messErreur = messErr;
    }
	
	creerCompte(){
		var pseudo= (<HTMLInputElement>document.getElementById("pseudoCr")).value;
		var mail= (<HTMLInputElement>document.getElementById("mailCr")).value;
		var mdp= (<HTMLInputElement>document.getElementById("passCr")).value;

		if(pseudo != "" && mail != "" && mdp != ""){
			this.http.get("https://los.ling.fr/users/subscribe?email="+mail+"&name="+pseudo+"&password="+mdp)
			.subscribe(data => {
						console.log(data["_body"]["status"]);
						var resp = JSON.parse(data["_body"].toString());
						console.log(resp);
						if(resp.status=="ok"){
							this.routeur.navigate([""]);
                            alert('Vous avez bien creer votre compte');
                           (<HTMLInputElement>document.getElementById("pseudoCr")).value = "";
                           (<HTMLInputElement>document.getElementById("mailCr")).value = "";
                           (<HTMLInputElement>document.getElementById("passCr")).value = "";
						}
						else{
							this.routeur.navigate(["error"]);
						}
					
					}, error => {
						console.log('http error', error);
					});	
		}
	}


	supprCompte(){
		var mail= (<HTMLInputElement>document.getElementById("mailSp")).value;
		var mdp= (<HTMLInputElement>document.getElementById("passSp")).value;
		if(mail != "" && mdp != ""){
			this.http.get("https://los.ling.fr/users/unsubscribe?email="+mail+"&password="+mdp)
			.subscribe(data => {
						console.log(data["_body"]["status"]);
						var resp = JSON.parse(data["_body"].toString());
						console.log(resp);
						if(resp.status=="ok"){
							this.routeur.navigate([""]);
						}
						else{
							this.routeur.navigate(["error"]);
						}
					
					}, error => {
						console.log('http error', error);
					});
		}
	}

	ngAfterViewInit(){

		//set focus on field
		$('.form').find('input, textarea').on('keyup blur focus', function (e) {

		  var $this = $(this),
			  label = $this.prev('label');

			  if (e.type === 'keyup') {
					if ($this.val() === '') {
				  label.removeClass('active highlight');
				} else {
				  label.addClass('active highlight');
				}
			} else if (e.type === 'blur') {
				if( $this.val() === '' ) {
					label.removeClass('active highlight');
					} else {
					label.removeClass('highlight');
					}
			} else if (e.type === 'focus') {

			  if( $this.val() === '' ) {
					label.removeClass('highlight');
					}
			  else if( $this.val() !== '' ) {
					label.addClass('highlight');
					}
			}

		});

		//set active tab highlight
		$('.tab a').on('click', function (e) {

		  e.preventDefault();

		  $(this).parent().addClass('active');
		  $(this).parent().siblings().removeClass('active');

		  var target = $(this).attr('href');

		  $('.tab-content > div').not(target).hide();

		  $(target).fadeIn(600);

		});
	}

}
