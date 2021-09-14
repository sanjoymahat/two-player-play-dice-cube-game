
var randomNumber1=Math.floor(Math.random()*6)+1;// target 1to 6
var randomDiceimage="dice"+randomNumber1+".svg";
var randomimagesource="images/"+randomDiceimage;//images/dice1.svg-dice6.svg
var images1=document.querySelectorAll("img")[0];
images1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimagesource2="images/dice"+randomNumber2+".svg";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 win  ♚";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 win  ♚";
}else{
    document.querySelector("h1").innerHTML="drow ❤";
}


