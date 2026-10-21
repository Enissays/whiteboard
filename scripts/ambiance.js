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

function helicopter_helicopter() {
    let sound = new Audio('sounds/arthur/helice.ogg');
    sound.volume = 1.0;
    sound.play();
}

function bigsound() {
    let sound = new Audio('sounds/arthur/BOUM.mp3');
    sound.volume = 1.0;
    sound.play();
}

function nosound() {
    random_time = Math.floor(Math.random() * (60000 - 5000) + 5000);
    setTimeout(function(){
        bigsound();
    }, random_time);
}

function spin_heli(image) {
    spinfast(image);
    helicopter_helicopter();
}

function morph(image) {
    image.src = "img/arthur/flag_fr.png";
    spinfast(image);
    let sound = new Audio('sounds/arthur/hymne_fr.mp3');
    sound.volume = 1.0;
    sound.play();
}