// ====== GLOBAL VARIABLES ======

// ARRAY TO HOUSE NAMES OF CHARACTERS
var options = ["jaime", "tyrion", "cersei", "khaleesi", "ned", "arya", "jon snow", "winterfell", "sansa", "joffrey", "ramsay", "hodor", "bran", "stark"];

// GRABBING HTML ELEMENTS WITH IDs
var wordSpace = document.getElementById("wordSpace");
console.log(wordSpace);
var guessedWord = document.getElementById("guessedWord");
console.log(guessedWord);

// WIN COUNTER
var wins = 0;

// USER GUESSES REMAINING
var guessesRemaining = 10;

//loss counter
var losses = 0;

// ARRAY TO HOUSE GUESSED LETTERS
var guessedLetters = [];


// SETTING GUESSEDWORD TO SOMETHING FROM OPTIONs ARRAY
guessedWord.innerHTML = options[Math.floor(Math.random() * options.length)];

// MAKE GUESSWORD HIDDEN BY SETTING THE VISIBILITY CSS PROPERTY TO HIDDEN
guessedWord.style.visibility = "hidden"

for(var i = 0; i < guessedWord.innerHTML.length; i++){
  guessedLetters.push(" _ ");
  var all = guessedLetters.join(" ");
  wordSpace.innerHTML = all;
}

console.log(all);








	//capture user inputs with keyup.
	document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var letterFound;
    var presentState = document.getElementById("wordSpace").innerHTML;
    for(var i = 0; i < guessedWord.length; i++){
      if (userGuess === guessedWord.charAt(i)) {
        letterFound.push(i);
      }
      if (letterFound.size() > 0){

      }
    }
    console.log(userGuess);
  }




  

   
   // guessedLetters.push(userGuess);
   // for(var i = 0; i < options.length; i++){
   // if(userGuess === randomWord.length){
   // 	alert("Great Job! You must really know your Game of Thrones! Guess another one!")
   // 	wins++;
   // } else if (guessesRemaining === 0){
   // 	alert("Game over");
   // }


//create a counter that increments with each keyed letter.




//computer has chosen word
//break down word into array of letters HINT: .split();
//capture user input
//confirm user input is a valid character (i.e, not a ~ or /)
//loop over array, compare user imput against array of characters
  //if true {}
  //else{}


//if user keys a letter contained in the word, display the letter and increment score.

//if user keys a letter not in word, decrement guessesRemaining.

//if guessesRemaining reaches 0, end game and alert "you lose".
// if(guessesRemaining === 0){
//   alert("gameOver");
// }
// if all letters are selected for the word, alert "you win" and start game over
// if(userGuess === randomWord.length){
//   alert("Great job!");
//   win++;
// }
    


