//Connection check
//console.log("Hello")

//variables are declared below

var win =0;
var loss=0;
var computerWord = ["jeep","gmc","geely","lancia","maserati"]
var blankArray=[];
var randomNumber= Math.floor(Math.random()*5);
var computerRandomWord ="";
//Have to create another variable to break the word into letters
var wordBreaker=[];
var numberOfBlank = 0;
//Array for wrong guess
var wrongGuess=[];
var noOfGuesses =13;
computerRandomWord = computerWord[randomNumber];
    //test
console.log(computerRandomWord);
var wordBreak = [...computerRandomWord];


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
function gameStart(){
   
    //test
    console.log(wordBreak);
    for(var i = 0; i<wordBreak.length; i++){
        blankArray.push("_");
    }
    //removes "," in the array
    htmlWordtoGuess.textContent=blankArray.join(" ");

}

gameStart();
document.onkeypress= function(event){
    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    //test
    console.log(keyPressed);

    //test
    console.log(wordBreak);

    function checkLetter(letter){
        
        if(wordBreak.indexOf(keyPressed)>-1){
            for(var i = 0; i<wordBreak.length; i++){
                if(wordBreak[i]==keyPressed){
                    blankArray[i]==keyPressed;
                }
            }
        }
        else{
            wrongGuess.push(keyPressed).join(" ");


        }
    }

    checkLetter(keyPressed);
}