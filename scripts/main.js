console.log("Le script fonctionne");

function killTheo() {
    const theo = document.getElementById("theo");
    const consigne = document.getElementById("consigne");
    // theo.textContent = "👨🏼🔫🔴 NOOOOOON THEO PUREE QU'EST CE QUE T'AS FAIT IL EST MORT JUSTE "; HALLOWEEN
    theo.textContent = "👻🔫🔴 NOOOOOON THEO PUREE QU'EST CE QUE T'AS FAIT IL EST MORT JUSTE ";
    consigne.textContent = "adieu theo ptn.."
}

// Le code de hugues
var count = 5;

function getHugues(self) {
    const elements = [...document.body.getElementsByTagName("*")];
    const filteredElements = elements.filter(elt => elt.innerHTML && elt.nodeName != "BR" && elt.nodeName != "IMG" && elt.id != "consigne" && elt.id != "hugues-count" && elt.id != "isolation-eni");
    var randomIndex = Math.round(Math.random() * filteredElements.length);
    console.log(filteredElements[randomIndex].nodeName);
    // filteredElements[randomIndex].innerHTML += "<span id=\"hugues\" onclick=\"getHugues(this)\">👦🏾</span>"; HALLOWEEN
    filteredElements[randomIndex].innerHTML += "<span id=\"hugues\" onclick=\"getHugues(this)\">🎃</span>";

    count--; 
    if (count > 0) {
        const counter = document.getElementById("hugues-count");
        counter.textContent = count;
        self.remove();
    } else {
        // self.textContent = "👦🏾🔫🔴 PUTAIN PAS LUI AUSSI" HALLOWEEN
        self.textContent = "🎃🔫🔴 PUTAIN PAS LUI AUSSI" 

    }
}

// code de la course 
let date = new Date() 
// LA CONSTANTE EN VRAI SERT PLUS A GRAND CHOSE SI ON A PLUSIEURS CADEAUX QUOTIDIENS
const jour = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() 
if(localStorage.getItem("firstConnexion") != "true"){
    localStorage.setItem("firstConnexion", "true")
    localStorage.setItem("dabloons", "10")
    localStorage.setItem("date", "")
}

let dabloons = Number(localStorage.getItem("dabloons")) 
let coureur = -1;
candidats = ["candidat-1", "candidat-2", "candidat-3"]
nom_candidats = ["Linos", "Spiderman", "Hamster"]
let course_possible = true


function ouverture_course(){
    document.documentElement.style.setProperty('--visibilite-course', 'absolute');
    document.getElementById("gagnant").innerHTML = "";
    update_dabloons()
    document.getElementById("numb_dabl").value = 1
    document.documentElement.style.setProperty('--choix-coureur-'+coureur , 'hidden')
    coureur = -1;
}

function update_dabloons(){
    document.getElementById("dabloons").innerHTML = `Dabloons : ${dabloons}`;
    document.getElementById("numb_dabl").max = dabloons
    localStorage.setItem("dabloons", dabloons.toString())
}

function select_coureur(n){
    document.documentElement.style.setProperty('--choix-coureur-'+coureur , 'hidden')
    coureur = n;
    document.documentElement.style.setProperty('--choix-coureur-'+coureur , 'solid')
}

function commencer_course(){
    let mise = document.getElementById("numb_dabl").value
    if(coureur != -1 && course_possible && dabloons - mise >= 0 && mise > 0){
        course_possible = false
        dabloons = dabloons - mise
        let vitesses = []
        let gagnant = -1
        let mini_vit = Infinity
        for(let i = 0; i < 3; i++){
            let vitesse = Math.random() * (3000 - 1000) + 1000
            vitesses.push(vitesse)
            if(mini_vit > vitesse){
                mini_vit = vitesse
                gagnant = i+1
            }
        }
        vroom_activation(vitesses)
        if(gagnant === coureur){
            dabloons = dabloons + mise * 2
        }
        setTimeout(()=>{
            update_dabloons();
            document.getElementById("gagnant").innerHTML = candidats[gagnant-1]+" a gagné";
        }, 4000)
    }
    else if(coureur == -1){
        document.getElementById("erreur-demarrage").innerHTML = "Pas de coureur choisi !";
        setTimeout(()=>{document.getElementById("erreur-demarrage").innerHTML = "";}, 3000);
    }
    else if(mise <= 0){
        document.getElementById("erreur-demarrage").innerHTML = "Mise incorrecte !";
        setTimeout(()=>{document.getElementById("erreur-demarrage").innerHTML = "";}, 3000);
    }
    else if(dabloons - mise < 0){
        document.getElementById("erreur-demarrage").innerHTML = "Pas assez de Dabloons !";
        setTimeout(()=>{document.getElementById("erreur-demarrage").innerHTML = "";}, 3000);
    }
    else{
        document.getElementById("erreur-demarrage").innerHTML = "Attendez la fin de la course !";
        setTimeout(()=>{document.getElementById("erreur-demarrage").innerHTML = "";}, 3000);
    }
}


function vroom_activation(vitesses){
    setTimeout(()=>{
        gagnant = vroom(vitesses)
        let sound = new Audio('sounds/course.mp3');
        sound.volume = 1.0;
        sound.play();
    }, 1000)
    setTimeout(()=>{course_possible = true}, 5000)
    setTimeout(()=>{document.documentElement.style.setProperty('--visibilite-voiture', 'hidden')}, 5000)
    document.documentElement.style.setProperty('--visibilite-voiture', 'visible');
}

function vroom(vitesses){
    for(let i = 0; i < 3; i++){
        document.getElementById(candidats[i]).animate(
    [
        // keyframes
        
        { transform: "translateX(100%)" }
    ],
    {
        // timing options
        duration: vitesses[i],
        iterations: 1,
    },
    )
    }
}

//
function cadeau_quotidien(){
    if(localStorage.getItem("date") != jour){
        let bonus = Math.floor(Math.random() * 3 + 1)
        dabloons += bonus
        update_dabloons()
        localStorage.setItem("date", jour)
        if(bonus == 1){
            document.getElementById("message-cadeau").innerHTML = "Vous avez gagné " + bonus.toString() + " Dabloon !";
            setTimeout(()=>{document.getElementById("message-cadeau").innerHTML = "";}, 3000);
        }
        else{
            document.getElementById("message-cadeau").innerHTML = "Vous avez gagné " + bonus.toString() + " Dabloons !";
            setTimeout(()=>{document.getElementById("message-cadeau").innerHTML = "";}, 3000);
        }
        
    }
    else{
        document.getElementById("message-cadeau").innerHTML = "Vous avez déjà récupéré votre bonus aujourd'hui !";
        setTimeout(()=>{document.getElementById("message-cadeau").innerHTML = "";}, 3000);
    }
}






function spinfast(image) {
    image.animate(
        [
            { transform: "rotate(0deg)" },
            { transform: "rotate(360deg)" }
        ],
        {
            duration: 500,
            iterations: 10
        }
    );
}

function bigsound() {
    let sound = new Audio('sounds/arthur/BOUM.mp3');
    sound.volume = 1.0;
    sound.play();
}

function nosound() {
    setTimeout(function(){
        bigsound();
    }, 3000);
}