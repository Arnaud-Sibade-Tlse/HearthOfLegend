import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-accueil',
  //templateUrl: './accueil.component.html',
    templateUrl:'./accueil.component.html',
    //'<p>Your credit card is: {{ pseudo }}</p>',
  styleUrls: ['./accueil.component.css']
})


export class AccueilComponent {
    
	constructor(private routeur: Router,
				private http : Http
				) { }
    
    

    
    
    seDeconnecter(){
        
        console.log(' in  SeDeconnecter ');
        /* verifie qu'il est co ? */
        this.http.get("http://los.ling.fr/users/disconnect")
        .subscribe(data => {
						var resp = JSON.parse(data["_body"].toString());
                        console.log(data);
						if(resp.status=="ok"){
							this.routeur.navigate(["login"]);
						}
						else{
							this.routeur.navigate(["error"]);
						}
                    }
        , error => {
						console.log('http error', error);
					});	
    }
    
    show_div(idShow,idButton) {
        
        console.log(' in show_div ');
        
        
        var tIdShow = (<HTMLInputElement><HTMLInputElement>document.getElementById(idShow));
        var tDdButton = (<HTMLInputElement>document.getElementById(idButton));
        console.log(tIdShow);
        if (tIdShow.style.display == 'none') {
            tIdShow.style.display = 'block';
            tDdButton.style.display = 'none';
        } else {
            /* sinon envoyer la fonction refresh() si bouton reste afficher ?*/
            
        }   
    }
    

        /*    
        
        Ce WS ne nécessite aucun paramètre. Une fois appelé, ce WS met l’utilisateur dans la liste
des joueurs désirant jouer.
Ce WS retourne 2 champs :
— "matchmakingId" : l’identifiant du "matchmaking" qui correspond à l’entrée du joueur dans
la liste des joueurs désirant jouer
— "request" : un tableau contenant l’ensemble des demandes reçues
Le champ "request" se met à jour chaque fois qu’une nouvelle requête est reçue. Il faut donc
envoyer une requête vers ce WS régulièrement 7 pour mettre à jour les requêtes reçues. Une
requête contient les champs suivants :
— "userId" : l’identifiant de l’utilisateur qui a envoyé la requête
— "matchmakingId" : l’identifiant du "matchmaking" de l’utilisateur qui a envoyé la requête
— "name" : le nom de l’utilisateur qui a envoyé la requête
Il est donc possible de connaître quel joueur souhaite jouer avec l’utilisateur connecté
        
        */    
    
   listeJoueur(){this.http.get("http://los.ling.fr/matchmaking/getAll");}
    
    
    
    
    
            /*    
        
        Ce WS retourne la liste directement, chaque élément de la liste contient les champs suivant :
— "email" : email du joueur désirant jouer
— "name" : nom du joueur désirant jouer
— "matchmakingId" : l’identifiant du matchmaking du joueur désirant jouer
        
        */
    
    
    
    
    
//    participer(){this.http.get("http://los.ling.fr/matchmaking/participate");}
    
    
    
    
    
            /*    
        
        Ce WS nécessite 1 paramètre :
— "matchmakingId" : l’identifiant du matchmaking du joueur à qui on souhaite envoyer la
requête
Ce WS retourne juste un message précisant que la requête est envoyée.
        
        */
    
    
    
    
    
 //   envoyerDemandeDePartie(){this.http.get("http://los.ling.fr/matchmaking/request");}
    
    
    
    
    
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