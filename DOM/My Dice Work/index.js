


// variable declearation 

var dice1 = Math.floor((Math.random() * 6) + 1); // Random No. of player 1 dice

var dice2 = Math.floor((Math.random() * 6) + 1); // Random No. of player 2 dice


// changing the source

document.querySelector(".img1").setAttribute("src", "images/Dice" + dice1 + ".png") //change img1 to dice 1

document.querySelector(".img2").setAttribute("src", "images/Dice" + dice2 + ".png") //change img2 to dice 1

// Declear Winner and congratulate

if (dice1 > dice2) {
    document.querySelector("h1").textContent = "Player 1";
    document.querySelector("h4").textContent = "Wins! 🏁";
    document.querySelector(".player1").textContent = " Player 1 🏆";
}

else if (dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2";
    document.querySelector("h4").textContent = "Wins! 🏁";
    document.querySelector(".player2").textContent = " Player 2 🏆";
}

else {
    document.querySelector("h1").textContent = "DRAW (Man Utd Fc)";
}