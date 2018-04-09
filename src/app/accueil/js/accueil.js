function show_div(idShow,idButton) {

    var tIdShow = document.getElementById(idShow);
    var tDdButton = document.getElementById(idButton);
    console.log(tIdShow);
    if (tIdShow.style.display == 'none') {
        tIdShow.style.display = 'block';
        tDdButton.style.display = 'none';
    } else {
        /* sinon envoyer la fonction refresh() si bouton reste afficher ?*/
        
    }
}

function sendRequest(){
    
    alert('You sent a request to "UserXXX"');
    
}


function refresh(){
    
    alert('List refreshed')
}
