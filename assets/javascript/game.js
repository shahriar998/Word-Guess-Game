//Connection check
//console.log("Hello")

//variables are declared below

var win =0;
var loss=0;
var computerWord = ["jeep","gmc","geely","lancia","maserati"]
var blankArray=[];
var randomNumber= Math.floor(Math.random()*5);
//Have to create another variable to break the word into letters
var wordBreaker=[];



//********************************************** */


//Elements from HTML declared below 

var htmlWordtoGuess = document.getElementById("word-blank");
var htmlWrongGuess = document.getElementById("wrong-guess");
var htmlNoOfGuess = document.getElementById("guess-remaining");
var htmlNoOfWin = document.getElementById("win-count");
var htmlNoOfLoss = document.getElementById("loss-count");
//********************************************** */
//random word generator below 


//logics are below
document.onkeypress= function(event){
    var keyPressed = event.key;
    //test
    console.log(keyPressed);
}