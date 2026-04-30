const correctSound = new
Audio ("assets/correct.mp3");
const wrongSound new
Audio ("assets/wrong.mp3");

function playCorrectSound(){
    correctSound.currentTime = 0;
    correctSound.play ();

}

function playWrongSound() {
    wrongSound.currentTime = 0;
    wrongSound.play();
}

