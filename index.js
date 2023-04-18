var playerName1="playerName1";
var playerName2="playerName2";

function startGame(){
 //player Names
  playerName1= prompt("Enter player1 name");
 document.getElementById("p1").innerHTML=playerName1.toUpperCase();
  playerName2=prompt("Enter player2 name");
 document.getElementById("p2").innerHTML=playerName2.toUpperCase();
}
 
function rollTheDice(){
    var audio= new Audio("sounds/dice.mp3");
    audio.play();
   

var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var imageSource="images/"+randomDiceImage ;
var image1 = document.querySelectorAll("img")[2];
image1.setAttribute("src",imageSource); 

//now for second dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var imageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[3];
image2.setAttribute("src",imageSource2);
//player wins code js
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=playerName1.toUpperCase()+" WINS";
    document.getElementById("p1").style.backgroundColor = "#0098CE";
    document.getElementById("p1").style.color = "white";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=playerName2.toUpperCase()+ " WINS";
    document.getElementById("p2").style.backgroundColor = "#0098CE";
    document.getElementById("p2").style.color = "white";

}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
}

//getting player name from user
//alert("Welcome to the  dice game. Try your luck with your friend");
//Detecting keyboard press
// Get the input field


// Execute a function when the user presses a key on the keyboard
document.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});
    



//function to edit player names on button click
function editName(){
   playerName1= prompt("change playerName1");
    playerName2=prompt("change playerName2");
    document.getElementById("p1").innerHTML=playerName1.toUpperCase();
    document.getElementById("p2").innerHTML=playerName2.toUpperCase();
    document.getElementById("luck").innerHTML.value = "Try your luck!!!"
    
}



//resetting code in js







