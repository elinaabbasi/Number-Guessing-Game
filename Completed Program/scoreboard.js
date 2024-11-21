function playMusic() {
    var music = document.getElementById("music");
    music.play();
}
function pauseMusic() {
    var music = document.getElementById("music");
    music.pause();
}

const winnerName = [];
const score = [];


Object.keys(sessionStorage).forEach((key) => {
    winnerName.push(key);
    score.push(sessionStorage.getItem(key));
}); 

for (let i = 0; i < score.length - 1; i++) {
    for (let j = 0; j < score.length - 1 - i; j++) {
        if (score[j + 1] < score[j]) {
            // Swap scores
            let tempScore = score[j + 1];
            score[j + 1] = score[j];
            score[j] = tempScore;

            // Swap corresponding names
            let tempName = winnerName[j + 1];
            winnerName[j + 1] = winnerName[j];
            winnerName[j] = tempName;
        }
    }
}
console.log(score);
console.log(winnerName);

window.onload = init;

function init() {
    document.getElementById("names").innerHTML = "";
    document.getElementById("scores").innerHTML = ""; 
    document.getElementById("names").innerHTML +=  winnerName.join("<br>");
    document.getElementById("scores").innerHTML += score.join("<br>");
}

alert(winnerName[0] + " is the winner!");