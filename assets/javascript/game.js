//// create random words
var options = ["jaime", "tyrion", "cersei", "khaleesi", "ned", "arya", "jon snow", "winterfell", "sansa", "joffrey", "ramsay", "hodor", "bran", "stark"];

//pick random word
var randomWord = options[Math.floor(Math.random() * options.length)];

// show random word in browser
console.log("The word is: " + computerGuess);

//every time word is guess wins increases by 1
var wins = 0;

// score keeper
var guessesRemaining = 30;

//display to user blank fields that match the number of letters.
var guessedLetters = [];
guessedLetters.push(userGuess);

	//capture user inputs with keyup.
	document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

   
   guessedLetters.push(userGuess);
   for(var i = 0; i < options.length; i++){
   if(userGuess === randomWord.length){
   	alert("Great Job! You must really know your Game of Thrones! Guess another one!")
   	wins++;
   } else if (guessesRemaining === 0){
   	alert("Game over");
   }


//create a counter that increments with each keyed letter.





//if user keys a letter contained in the word, display the letter and increment score.

//if user keys a letter not in word, decrement guessesRemaining.

//if guessesRemaining reaches 0, end game and alert "you lose".
if(guessesRemaining === 0){
  alert("gameOver");
}
//if all letters are selected for the word, alert "you win" and start game over. 
if(userGuess === randomWord.length){
  alert("Great job!");
  win++;
}

    


