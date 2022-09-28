

var dice1  = Math.floor((Math.random() * 6) + 1); //raffle dicee 1
var dice2  = Math.floor((Math.random() * 6) + 1); //raffle dicee 2

document.querySelector(".img1").setAttribute("src", "./images/dice"+dice1+".png") //change img1 to dicee 1
document.querySelector(".img2").setAttribute("src", "./images/dice"+dice2+".png") //change img2 to dicee 2

//verify the winner and change headings
if (dice1 > dice2){
  document.querySelector("h1").textContent = "Player 1"; //"white" text to the Player
  document.querySelector("h4").textContent = "Win! 🏁"; //yellow text to the Win word
  document.querySelector(".player1").textContent = "Player 1 🏆"; //add trophy
}
else if (dice1 < dice2){
    document.querySelector("h1").textContent = "Player 2"; //white text to the Player
    document.querySelector("h4").textContent = "Win! 🏁"; //yellow text to the Win word
    document.querySelector(".player2").textContent = "Player 2 🏆"; //add trophy
  }
  else{
    document.querySelector("h1").textContent = "Draw!"; //draw
  }