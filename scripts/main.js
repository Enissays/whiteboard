console.log("Le script fonctionne");

function killTheo() {
    const theo = document.getElementById("theo");
    const consigne = document.getElementById("consigne");
    theo.textContent = "👨🏼🔫🔴 NOOOOOON THEO PUREE QU'EST CE QUE T'AS FAIT IL EST MORT JUSTE ";
    consigne.textContent = "adieu theo ptn.."
}

// Le code de hugues
var count = 5;

function getHugues(self) {
    const elements = [...document.body.getElementsByTagName("*")];
    const filteredElements = elements.filter(elt => elt.innerHTML && elt.nodeName != "BR" && elt.nodeName != "IMG" && elt.id != "consigne" && elt.id != "hugues-count" && elt.id != "isolation-eni");
    var randomIndex = Math.round(Math.random() * filteredElements.length);
    console.log(filteredElements[randomIndex].nodeName);
    filteredElements[randomIndex].innerHTML += "<span id=\"hugues\" onclick=\"getHugues(this)\">👦🏾</span>";

    count--; 
    if (count > 0) {
        const counter = document.getElementById("hugues-count");
        counter.textContent = count;
        self.remove();
    } else {
        self.textContent = "👦🏾🔫🔴 PUTAIN PAS LUI AUSSI"
    }
}


function vroom_activation(){
    setTimeout(()=>{vroom()}, 1000)
    setTimeout(()=>{document.documentElement.style.setProperty('--visibilite-voiture', 'hidden')}, 5000)
    document.documentElement.style.setProperty('--visibilite-voiture', 'visible')

}

candidats = ["candidat-1", "candidat-2", "candidat-3"]

function vroom(){
    for(let i = 0; i < 3; i++){
        let vitesse = Math.random() * (3000 - 1000) + 1000
        document.getElementById(candidats[i]).animate(
    [
        // keyframes
        
        { transform: "translateX(100vw)" }
    ],
    {
        // timing options
        duration: vitesse,
        iterations: 1,
    },
    )
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
    let sound = new Audio('sounds/BOUM.mp3');
    sound.volume = 1.0;
    sound.play();
}

function nosound() {
    setTimeout(function(){
        bigsound();
    }, 3000);
}