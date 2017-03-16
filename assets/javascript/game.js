//// create random words
var options = ["jaime", "tyrion", "cersei", "khaleesi", "ned", "arya", "jon snow", "winterfell", "sansa", "joffrey", "ramsay", "hodor", "bran", "stark"];
//pick random word
var randomWord = options[Math.floor(Math.random() * options.length)];
// show random word in browser
console.log("The word is: " + computerGuess);

var wins = 0;
var guessesRemaining = 30;
var guessedLetters = [];


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

   //create a score keeper that decrements with incorrect guesses.

//create a counter that increments with each keyed letter.



//display to user blank fields that match the number of letters.

//capture user inputs with keyup.

//if user keys a letter contained in the word, display the letter and
//increment score.

//if user keys a letter not in word, decrement score keeper.

//if score keeper reaches 0, end game and alert "you lose".

//if all letters are selected for the word, alert "you win" and start game over. 


    


