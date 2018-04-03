import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'loginHoL',
  templateUrl: './login.component.html',
  styleUrls: ['./css/login.css','./css/normalize.min.css','./css/titillium.css']
})
export class LoginComponent {

	constructor(private routeur: Router, private el: ElementRef) { }

	seConnecter(){
		var mail= (<HTMLInputElement>document.getElementById("mailCo")).value;
		var mdp= (<HTMLInputElement>document.getElementById("passCo")).value;
		// Si on crypte le mdp, comment est-il décrypter côté serveur ?
		if(mail != "" && mdp != ""){
			//window.location.href="/users/connect?email="+mail+"&password="+mdp;
			/*
			utiliser [Angular ou React] garder le token de la session dans [$scope ou state]
			protéger qu'on puisse pas le modif
			*/
			window.location.href="/users/connect?email="+mail+"&password="+mdp;
			//window.location.href="localhost:8080/users/connect?email="+mail+"&password="+mdp;
			//console.log("/users/connect?email="+mail+"&password="+mdp);
			
			//if ok
			//this.routeur.navigate(game);
			//else
			//this.routeur.navigate(error);
		}
	}


	creerCompte(){
		var pseudo= (<HTMLInputElement>document.getElementById("pseudoCr")).value;
		var mail= (<HTMLInputElement>document.getElementById("mailCr")).value;
		var mdp= (<HTMLInputElement>document.getElementById("passCr")).value;
		
		if(pseudo != "" && mail != "" && mdp != ""){
			window.location.href="/users/subscribe?email="+mail+"&name="+pseudo+"&password="+mdp;
			//window.location.href="localhost:8080/users/subscribe?email="+mail+"&name="+pseudo+"&password="+mdp;
			//console.log("/users/subscribe?email="+mail+"&name="+pseudo+"&password="+mdp);
		}
	}


	supprCompte(){
		var mail= (<HTMLInputElement>document.getElementById("mailSp")).value;
		var mdp= (<HTMLInputElement>document.getElementById("passSp")).value;
		if(mail != "" && mdp != ""){
			//window.location.href="localhost:8080/users/unsubscribe?email="+mail+"&password="+mdp;
			window.location.href="/users/unsubscribe?email="+mail+"&password="+mdp;
			//console.log(" /users/unsubscribe?email="+mail+"&password="+mdp);
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
