function objectCard(name, att, def, avatar) {
    showCard =
        '<div class="card">' +
            '<h4 class="name">' + name + '</h4>' +
            '<img class="img" src="' + avatar + '">' +
            '<div class="stats">' +
                '<div><img class="icon" src="./images/sword.png">    ' + att + '</div>' +
                '<div><img class="icon" src="./images/shield.png">   ' + def + '</div>' +
            '</div>' +
        '</div>';
    return showCard;
}

function loadFile(file) {
    var xhr = new XMLHttpRequest();
    var req;
    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', file);
    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // Si le fichier est chargé sans erreur
            document.getElementById('listCard').innerHTML = listCard(JSON.parse(xhr.responseText));
        }
    });
    xhr.send(null);
}

function listCard(req){
    /*../../../League-Of-Stones/modules/*/
    showListCard = "";
    for(var i in req.data) {
        showListCard += objectCard(req.data[i].key, (req.data[i].info["attack"] * 2 + req.data[i].info["defense"]), (req.data[i].info["defense"] * 2 + req.data[i].info["attack"]), "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + req.data[i].key + "_0.jpg");

    }
    return showListCard;
}
document.getElementById('listCard').innerHTML = loadFile('https://los.ling.fr/cards/getAll');