const rules = [
    "Pour ce niveau, tu as besoin du bol ! Déplace-le afin de récupérer les oeufs quand ils se cassent."
]

//Fonctions de base

function random(min, max, pas=1) {
    return (min/pas + Math.floor((Math.random() * (max-min))/pas))*pas;
}

function reset_counter() {
    sessionStorage.setItem("counter",0);
}

function init() {
    sessionStorage.setItem("level",1);
    sessionStorage.setItem("lives",2);
    sessionStorage.setItem("score",0);
    reset_counter();
}

//Update des paramètres

function update_level(level) {
    sessionStorage.setItem("level",level);
    const levelText = document.getElementById("level");
    levelText.textContent = level;
}

function update_lives(lives) {
    sessionStorage.setItem("lives",lives);
    const livesText = document.getElementById("lives");
    livesText.textContent = lives;
}

function update_score(score) {
    sessionStorage.setItem("score",score);
}

//Fonction show/hide pour les menus

function show_start_menu() {
    document.documentElement.style.setProperty('--visibilite-start', 'flex');
}

function hide_start_menu() {
    document.documentElement.style.setProperty('--visibilite-start', 'none');
}

function show_rules_menu() {
    document.documentElement.style.setProperty('--visibilite-rules', 'flex');
}

function hide_rules_menu() {
    document.documentElement.style.setProperty('--visibilite-rules', 'none');
}

function show_game_menu(level) {
    if (level==1) document.documentElement.style.setProperty('--visibilite-level1', 'flex');
}

function hide_game_menu(level) {
    if (level==1) document.documentElement.style.setProperty('--visibilite-level1', 'none');
}

function show_loser_menu() {
    document.documentElement.style.setProperty('--visibilite-loser', 'flex');
}

function hide_loser_menu() {
    document.documentElement.style.setProperty('--visibilite-loser', 'none');
}

function show_victory_menu() {
    document.documentElement.style.setProperty('--visibilite-victory', 'flex');
}

function hide_victory_menu() {
    document.documentElement.style.setProperty('--visibilite-victory', 'none');
}




/*Affichage des règles*/

function update_rules_text(id, text) {
    const counter = Number(sessionStorage.getItem("counter"));
    if (counter>text.length) {
        clearInterval(id);
    }
    else {
        const rulesText = document.getElementById("rules-text");
        rulesText.textContent = text.slice(0,counter+1);
        sessionStorage.setItem("counter", counter+1);
    }
}

function start() {
    if(sessionStorage.getItem("level") != "true") init();
    const level = sessionStorage.getItem("level");
    update_level(level);
    hide_start_menu();

    setTimeout(show_rules_menu, 100);
    const text = rules[level-1];
    var t = 1;
    var refreshText = null;
    refreshText = setInterval(update_rules_text, 40, refreshText, text);
    setTimeout(hide_rules_menu, 5000);
    setTimeout(start_game, 5100, level);
}


/*Jeu*/

function start_game(level) {
    show_game_menu(level);
    if (level==1) level1();
}

function level1() {
    var elem = document.getElementsByClassName('oeuf'); //Récupération des oeufs et paramètres pour chaque oeuf
    const n = elem.length;
    const pos = [];
    const heights = Array(n).fill(200);
    const speeds = [];
    const states = Array(n).fill(0);
    const moveFunctions = [];
    const timers = [];


    for (let i = 0; i < n; i++) {
        elem[i].src="img/tom/cuisine/oeuf1.png"; //Initialisation
        elem[i].style.display="block";
        pos.push(random(0,3.14,0.01));
        speeds.push(random(0.005,0.015,0.001));


        moveFunctions.push(function test() { //Fonction appelée toutes les 10ms
            pos[i] = pos[i]+speeds[i];
            cos = 500*Math.cos(pos[i])
            //elem[i].style.left = "calc(50vw + calc("+cos+"px - 50px)";
            if (states[i] !==3) elem[i].style.left = 906.5 + cos - 50 + "px";

            if(random(0,500)<1) { //Changement d'état (pas craqué-> un peu craqué, etc...)
                if (states[i]<3 && ! (states==2 && states.some((elt) => elt === 3))) states[i]++;
                switch(states[i]) {
                    case 1 : elem[i].src="img/tom/cuisine/oeuf2.png"; break;
                    case 2 : elem[i].src="img/tom/cuisine/oeuf3.png"; break;
                    case 3 : elem[i].src="img/tom/cuisine/oeuf4.png"; break;
                }
            }

            if (states[i] === 3) {heights[i]+=5; if (heights[i]>450) states[i]++;} //Craquage d'un oeuf
            elem[i].style.top = heights[i]+"px";

            if( states[i] === 4) { //Disparition et check si l'oeuf est dans le bol
                var saladier = document.getElementById("follow");
                const pos1 = parseInt(elem[i].style.left, 10);
                const pos2 = parseInt(saladier.style.left, 10);
                if (Math.abs(pos1-pos2)>75) {
                    const lives = Number(sessionStorage.getItem("lives"));
                    update_lives(lives-1);
                }
                const score = Number(sessionStorage.getItem("score"));
                update_score(score+1);
                clearInterval(timers[i]);
                elem[i].style.display="none";
            }

            if (Number(sessionStorage.getItem("lives"))==0) { //Perdu
                for (let i = 0; i < n; i++) clearInterval(timers[i]);
                hide_game_menu(1);
                show_loser_menu();
                setTimeout(update_lives, 2000, 2);
                setTimeout(hide_loser_menu, 2000);
                setTimeout(show_start_menu, 2100);
            }
            else {
                if (Number(sessionStorage.getItem("score"))==n) { //Gagné
                    for (let i = 0; i < n; i++) clearInterval(timers[i]);
                    update_lives(2);
                    hide_game_menu(1);
                    show_victory_menu();
                }
            }
        });
    }

    for (let i = 0; i < n; i++) timers.push(setInterval(moveFunctions[i],10));
}