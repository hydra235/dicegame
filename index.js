
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1 - 6
    var randomNumber2 = Math.floor(Math.random() * 6 + 1); // 1 - 6
    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");
    var winner = document.querySelector("h1");

    dice1.src = "./images/dice" + randomNumber1 + ".png"; // image 1 source
    dice2.src = "./images/dice" + randomNumber2 + ".png"; // image 2 source

    if (randomNumber1 > randomNumber2) {
        winner.textContent = "🚩Le joueur 1 gagne!"
    }
    else if (randomNumber2 > randomNumber1) {
        winner.textContent = "Le joueur 2 gagne!🚩"
    }
    else {
        winner.textContent = "Égalité"
    } 
}