import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-accueil',
    templateUrl:'./accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent {   
    
    pseudo:String  = this.loginService.getUserPseudo();
    id:String = this.loginService.getUserID();
    token:String = this.loginService.getUserToken();
    
    
    
	constructor(private routeur: Router,
				private http : Http,
				private loginService : LoginService
				) { }
    
    
    seDeconnecter(){
        var token = this.loginService.getUserToken();
        
        
        if(this.loginService.getAuth()){        
        this.http.get("https://los.ling.fr/users/disconnect?token="+token)
        .subscribe(data => {
						var resp = JSON.parse(data["_body"].toString());
                        
						if(resp.status=="ok"){
							this.routeur.navigate([""]);
                            this.loginService.setAuth(false);
                            this.loginService.setUserInfo("","","");
                            alert("Vous êts deco");
						}
						else{
							this.routeur.navigate(["error"]);
						}
                    }
        , error => {
						console.log('http error', error);
					});
        }
        else{
            this.routeur.navigate([""]);
        }
    }
    
    refresh(){
        var token = this.loginService.getUserToken();
        this.http.get("https://los.ling.fr/matchmaking/participate?token="+token)
            .subscribe(data => {
                var resp = JSON.parse(data["_body"].toString());
                if(resp.status=="ok"){
                    this.loginService.setParticipateMatch(resp.data.matchmakingId,resp.data.request);
                }
                else{
                    this.loginService.setMessErr(resp["message"],false);
                    this.routeur.navigate(["error"]);
                }      
            }, error => {
                console.log('http error', error);   
            });
        this.listeJoueur();
    }
    
    show_div(idShow,idButton) {
        
        var tIdShow = (<HTMLInputElement>document.getElementById(idShow));
        var tDdButton = (<HTMLInputElement>document.getElementById(idButton));
        
        
        tIdShow.style.display = 'block';
        tDdButton.style.display = 'none';


        this.refresh();
    }
    

        
    
   listeJoueur(){
       var token = this.loginService.getUserToken();
       var tableau = document.getElementById("tableauListeJoueurs");
       var ligneExistante;
       while( ligneExistante = document.getElementById('Body') ){
           ligneExistante.parentNode.removeChild(ligneExistante);
        }
       this.http.get("https://los.ling.fr/matchmaking/getAll?token="+token)
               .subscribe(data => {
            

               var resp = JSON.parse(data["_body"].toString());
                console.log(resp);


               for (let user of resp.data)  {
                   
                        let ratioRandom = Math.floor(Math.random() * Math.floor(100));
                        let htmlcolumnName = '<tr class="body" id="Body"><td style="font-family: Lato-Regular;font-size: 15px;color: #808080;line-height: 1.4;background-color: #222222; width: 33%; padding-left: 40px;">' + user.name + '</td>';
                   
                        let htmlcolumnRatio = '<td style="font-family: Lato-Regular;font-size: 15px;color: #808080;line-height: 1.4;background-color: #222222;width: 13%;">'+ratioRandom+'%</td>';
                   
                        let htmlcolumnJoin = '<td style="font-family: Lato-Regular;font-size: 15px;color: #808080;line-height: 1.4;background-color: #222222;width: 22%;"><input width="30px" height="25px" type="image" class="btnJoin" src="../../assets/images/img_join.png" onclick="request('+user.matchmakingId+')"></td>';
                   
                        let htmlcolumnAccepter = '<td style="font-family: Lato-Regular;font-size: 15px;color: #808080;line-height: 1.4;background-color: #222222;width: 19%;"><input type="button" class="btnValidate" value=" IMG.png "></td>';
                   
                        let htmlcolumnRefuser = '<td style="font-family: Lato-Regular;font-size: 15px;color: #808080;line-height: 1.4;background-color: #222222;width: 13%;"> <input type="button" class="btnDecline" value=" IMG.png "></td></tr>';



                        let htmlRow = htmlcolumnName + htmlcolumnRatio + htmlcolumnJoin + htmlcolumnAccepter + htmlcolumnRefuser;

                        tableau.insertAdjacentHTML('beforeend', htmlRow);
                }
               
               
           }, error => {
               console.log('http error', error);
           });
       }
       
       

    
    
    
        request(matchId){
            var token = this.loginService.getUserToken();
            this.http.get("https://los.ling.fr/matchmaking/participate?matchmakingId="+matchId+"&token"+token);
             console.log('envoyer');  
            alert("Demande Envoyer");                       
        }   
    
    
    
    
    
            /*    
        
        Ce WS nécessite 1 paramètre :
— "matchmakingId" : l’identifiant du matchmaking du joueur à qui on souhaite envoyer la
requête
Ce WS retourne juste un message précisant que la requête est envoyée.
        
        */
    
    
    
    
    
    /*
            Ce WS nécessite 1 paramètre :
— "matchmakingId" : l’identifiant du matchmaking du joueur ayant envoyé la requête
Cet identifiant doit nécessairement être associé à un joueur qui vous a envoyé une requête.
Dans ce cas un match est créé, et les informations concernant ce match sont retournées :
— "player1" :
— "name" : nom du premier joueur (celui ayant envoyé la requête)
— "id" : identifiant du premier joueur
— "player2" : idem mais pour le joueur acceptant la requête
Dès qu’une requête est acceptée, les deux joueurs n’apparaissent plus dans la liste de matchmaking
(désirant jouer). Il n’est possible de jouer qu’un seul match à la fois.
        
        */
    
    
 //   accpeterDemandeDePartie(){this.http.get("http://los.ling.fr/matchmaking/acceptRequest"); }   
    
}