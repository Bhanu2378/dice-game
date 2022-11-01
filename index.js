//// For Dice Image 1 ////

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
/*
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource); */
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//// for Dice Image2 ////

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource = "images/dice" + randomNumber2 + ".png";

/* You can also write the last two lines in one line as well
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);
*/
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

//// Now we have to change the title using innerHTML according to the player dices : like who won
// using if stataments
// if player1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
