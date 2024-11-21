
function setDifficulty(range) {
    // Set numRange based on the provided range parameter
    var numRange = range;
    var difficulty = "Easy";
    if (numRange == 30) {
        difficulty = "Medium";
    }
    else if (numRange == 50) {
        difficulty = "Hard";
    }
    var output = document.getElementById("output");
    const numGuessed = []; 
    var output2 = document.getElementById("array");

    // Rest of your code...
    let y = Math.floor(Math.random() * numRange + 1);
    console.log(y);
    let guess = 0;


    document.getElementById("submitNum").onclick = function () {
        let x = document.getElementById("guessNum").value;

        if (x == y) {
    
            var playerName = prompt("CONGRATULATIONS!!! Enter your name: ");
            output.innerHTML = guess+1;
            var playerScore = guess + 1;
            sessionStorage.setItem(playerName + " (" + difficulty + ")", playerScore.toString());

        } else if (x > y) {
            guess += 1;
            output.innerHTML = guess;
            console.log(guess);
            alert("❌, too high");
            console.log(numGuessed);
            numGuessed.push(x);
            output2.innerHTML = numGuessed;
        } else {
            guess += 1;
            output.innerHTML = guess;
            console.log(guess);
            alert("❌, too low");
            numGuessed.push(x);
            output2.innerHTML = numGuessed;
        }    
    };
   
}

function playMusic() {
    var music = document.getElementById("music");
    music.play();
}
function pauseMusic() {
    var music = document.getElementById("music");
    music.pause();
}

function buttonColorEasy(){
        document.getElementById("buttonEasy").style.backgroundColor = 'rgb(230, 186, 192)';
        document.getElementById("buttonMedium").disabled = true;
        document.getElementById("buttonHard").disabled = true;

}
function buttonColorMedium(){
    document.getElementById("buttonMedium").style.backgroundColor = 'rgb(230, 186, 192)';
    document.getElementById("buttonEasy").disabled = true;
    document.getElementById("buttonHard").disabled = true;
}
function buttonColorHard(){
    document.getElementById("buttonHard").style.backgroundColor = 'rgb(230, 186, 192)';
    document.getElementById("buttonMedium").disabled = true;
    document.getElementById("buttonEasy").disabled = true;
}