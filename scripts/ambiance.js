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
    let sound = new Audio('sounds/helice.ogg');
    sound.volume = 1.0;
    sound.play();
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

function spin_heli(image) {
    spinfast(image);
    helicopter_helicopter();
}