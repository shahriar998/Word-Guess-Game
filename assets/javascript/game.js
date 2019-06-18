//Connection check
//console.log("Hello")

//variables are declared below

var win=0;
var loss=0;
var guess = 13;
var noOfBalank;
var computerWord = ["jeep","gmc","geely","lancia","maserati"]
var blankArray=[];
var computerRandomWord ="";
var blankSize;
//Have to create another variable to break the word into letters
var wordBreaker=[];
//Array for wrong guess
var wrongGuess=[];




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
//creating a function so that a random word is picked up from the array everytime it's being called and based on that no of blanks will be provided in the display
function randomWord(){
    console.log("Start randomWord function")
    var randomNumber= Math.floor(Math.random()*5);
    computerRandomWord = computerWord[randomNumber];
    wordBreaker = [...computerRandomWord];
    wordBreaker.join(" ");
    console.log(wordBreaker);
    for(var i = 0; i<wordBreaker.length;i++){
        blankArray.push("_");

    }
    noOfBlank= wordBreaker.length-1;
    guess=13;
    console.log("End randomWord function")
    htmlWordtoGuess.textContent=blankArray.join(" ");
    
}
function gameStart(){
   
    randomWord();
   
    

}

gameStart();
document.onkeypress= function(event){
    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    //test
    console.log(keyPressed);
    var keyPressArrayNumberCheck = wordBreaker.indexOf(keyPressed);
    console.log(keyPressArrayNumberCheck);

    if(keyPressArrayNumberCheck!=-1){
        console.log("I'm here")
        console.log(blankArray);
        console.log(wordBreaker);
        for(var i =0; i<wordBreaker.length; i++){
            if(keyPressArrayNumberCheck!=1){
                blankArray[i]=keyPressed;
                console.log("Boom "+blankArray[i]);
            }
                
        }
        console.log(blankArray);
    }
    else{
        guess--;
        htmlNoOfGuess.textContent=guess;
        if (guess==0){
            loss++;
            htmlNoOfLoss.textContent=loss;
            htmlNoOfGuess.textContent=13;
            blankArray=[];
            randomWord();
            
        }
    }

    // function checkLetter(letter){
        
    //     if(wordBreak.indexOf(keyPressed)>-1){
    //         for(var i = 0; i<wordBreak.length; i++){
    //             if(wordBreak[i]==keyPressed){
    //                 blankArray[i]==keyPressed;
    //             }
    //         }
    //     }
    //     else{
    //         wrongGuess.push(keyPressed).join(" ");


    //     }
    // }

    // checkLetter(keyPressed);
}