console.log("Le script fonctionne");

function killTheo() {
    const theo = document.getElementById("theo");
    const consigne = document.getElementById("consigne");
    theo.textContent = "👨🏼🔫🔴 NOOOOOON THEO PUREE QU'EST CE QUE T'AS FAIT IL EST MORT JUSTE ";
    consigne.textContent = "adieu theo ptn.."
}


function vroom_activation(){
    setTimeout(()=>{vroom()}, 1000)
    setTimeout(()=>{document.documentElement.style.setProperty('--visibilite-voiture', 'hidden')}, 2500)
    document.documentElement.style.setProperty('--visibilite-voiture', 'visible')

}


function vroom(){
    document.getElementById("on-avance").animate(
    [
        // keyframes
        
        { transform: "translateX(1200px)" }
    ],
    {
        // timing options
        duration: 1500,
        iterations: 1,
    },
    )
}

