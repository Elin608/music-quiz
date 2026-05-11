const song1 = new Audio("song1.mp3");



function playSong() {
    song1.currentTime = 0;
    song1.play();



    setTimeout(() => {
        song1.pause();
    }, 5000);
}