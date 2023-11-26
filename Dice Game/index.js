var r = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + r + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var r2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + r2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

var result = document.querySelector("h1");
// result.innerHTML = ""
if(r>r2){
    result.innerHTML = "Player 1 Win";
} 
if(r==r2){
    result.innerHTML = "Draw";
}
if(r2>r) {
    result.innerHTML = "Player 2 Win";
}