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




