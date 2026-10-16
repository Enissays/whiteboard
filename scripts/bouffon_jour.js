// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! HEY

// NE REGARDEZ PAS CE FICHIER !! GARDEZ VOUS CE PLAISIR DE DECOUVRIR LE BOUFFON DU JOUR 

// LE REMPLACEMENT DES IMAGES EST LE BIENVENUE 

var gens = [
    {
        "name" : "Hugo",
        "img" : "Hugo.png",
        "gen" : "F",
        "description" : "\"PUREE MAIS C'EST N'IMPORTE QUOI CE TRUC??\""
    },
    {
        "name" : "Tom",
        "img" : "Poupou.png",
        "gen" : "M",
        "description" : "\"oh mais c'est genial\""
    },
    {
        "name" : "Arthur",
        "img" : "Arthur.png",
        "gen" : "M",
        "description" : "\"Maintenant, devinez ce drapeau\""
    },
    {
        "name" : "Emma",
        "img" : "Emma.png",
        "gen" : "F",
        "description" : "\"Mais c'est terrifiant..?\""
    },
    {
        "name" : "Eni",
        "img" : "Eni.png",
        "gen" : "M",
        "description" : "\"À fortiori, cela va de soi\""
    },
    {
        "name" : "Elea-Rose",
        "img" : "Elea.png",
        "gen" : "F",
        "description" : "\"FEUUUUUUUR\""
    },
    {
        "name" : "Kevin",
        "img" : "Kevin.png",
        "gen" : "M",
        "description" : "\"Hmm, est ce que ça contribue au redressement des finances d'Anim'Est ? \""
    },
    {
        "name" : "Loan",
        "img" : "Loan.png",
        "gen" : "F",
        "description" : "\"Je me demande ce qu'en pense Seong Ji-Hun...\""
    }
]


// Charger un bouffon au hasard 
var nowDate = new Date(); 
var randomBouffon = (nowDate.getDay() * nowDate.getMonth()) % gens.length;

var image = document.createElement("img");
var imageParent = document.getElementById("bouffon");
image.id = "id";
image.className = "class";
image.src = "./img/gens/" + gens[randomBouffon].img;
imageParent.appendChild(image);

var bouffonTitle = document.getElementById("title-bouffon");
bouffonTitle.textContent = gens[randomBouffon].name;

var bouffonHeader = document.getElementById("header-bouffon");
if (gens[randomBouffon].gen == "F") bouffonHeader.textContent = "Bouffonne du jour";

var p = document.createElement("p");
p.id = "cite";
p.textContent = gens[randomBouffon].description;

imageParent.appendChild(p);