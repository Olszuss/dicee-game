document.querySelector(".button-33").onclick = function() {dice()};
function dice(){

var randomNumber1 = Math.floor(Math.random()* 6)+1;
var randomNumber2 = Math.floor(Math.random()* 6)+1;

var img1 = "./images/dice"+randomNumber1+".png"
var img2 = "./images/dice"+randomNumber2+".png"
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player1 win!"
} else if( randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player2 win!"
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!"
}
}


