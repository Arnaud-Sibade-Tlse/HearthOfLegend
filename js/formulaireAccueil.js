function seConnecter(){
	//var mdp= document.connexion.pass.value;
	var mail= document.getElementById("mailCo").value;
	var mdp= document.getElementById("passCo").value;
	// Si on crypte le mdp, comment est-il décrypter côté serveur ?
	if(mail != "" && mdp != ""){
		//window.location.href="/users/connect?email="+mail+"&password="+mdp;
		/*
		utiliser [Angular ou React] garder le token de la session dans [$scope ou state]
		protéger qu'on puisse pas le modif
		*/
		console.log("/users/connect?email="+mail+"&password="+mdp);
	}
}

function creerCompte(){
	/*
	var pseudo= document.creaCompte.pseudo.value;
	var mail= document.creaCompte.mail.value;
	var mdp= document.creaCompte.pass.value;
	*/
	var pseudo= document.getElementById("pseudoCr").value;
	var mail= document.getElementById("mailCr").value;
	var mdp= document.getElementById("passCr").value;
	
	if(pseudo != "" && mail != "" && mdp != ""){
		console.log(" /users/subscribe?email="+mail+"&name="+pseudo+"&password="+mdp);
	}
}

function supprCompte(){
	/*
	var mail= document.creaCompte.mail.value;
	var mdp= document.creaCompte.pass.value;
	*/
	var mail= document.getElementById("mailSp").value;
	var mdp= document.getElementById("passSp").value;
	if(mail != "" && mdp != ""){
		console.log(" /users/unsubscribe?email="+mail+"&password="+mdp);
	}
}