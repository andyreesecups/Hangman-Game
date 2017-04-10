 var wordList = ["khaleesi", "jon snow", "tyrion", "whitewalker", "joffrey", "sansa", "arya"];

 var chosenWord = "";
 var lettersInChosenWord = [];
 var numBlanks = 0;
 var blanksAndSuccesses = [];
 var wrongGuesses = [];

 var winCounter = 0;
 var lossCounter = 1;
 var numGuesses = 9;

 function startGame() {
     /*
     1.select a word at random
     2.break up that random word into letters and replace them with underscores
     3.add underscores to the HTML
     4. numGuesses is always equal to 9, blanksAndSuccesses and wrongGuesses are both empty arrays }
     */
     numGuesses = 9;
     blanksAndSuccesses = [];
     wrongGuesses = [];

     chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

     lettersinChosenWord = chosenWord.split("");
     numBlanks = lettersinChosenWord.length;

     for (var i = 0; i < numBlanks; i++) {
         blanksAndSuccesses.push("_");
     }
     document.getElementById("guesses-left").innerHTML = numGuesses;
     document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
 }

 function checkLetters(letter) {
     /* 
    1. Compare the letter the user picks matches any of the letters in the word
    2. A conditional statement to determine if the letter the user picked is in the word. If so, do something, if not, do something else
    3. If the user is wrong, decrease the numGuesses variable by 1
*/
     var letterInWord = false;

     for (var i = 0; i < numBlanks; i++) {
         if (chosenWord[i] === letter) {
             letterInWord = true;
         }
     }


     if (letterInWord) {
         for (i = 0; i < numBlanks; i++) {
             if (chosenWord[i] === letter) {
                 blanksAndSuccesses[i] = letter;
             }

         }
     } else {
         numGuesses--;
         wrongGuesses.push(letter);
     }

 }

 function roundComplete() {
     /*
    1. Update the HTML with letters that are in the word
    2. Update the HTML with guesses we have left
    3. It's going to update the HTML to show the wrong guesses
    4. Determine whether the user won the game or not
*/
     document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
     document.getElementById("guesses-left").innerHTML = numGuesses;

     console.log("lettersInChosenWord: " + lettersinChosenWord);
     console.log("blanksAndSuccesses: " + blanksAndSuccesses);
     console.log(typeof lettersinChosenWord);
     console.log(typeof blanksAndSuccesses);
     if (lettersinChosenWord.join() === blanksAndSuccesses.join()) {
         winCounter++;
         console.log("winCounter: " + winCounter);
         alert("You win!");
         document.getElementById("win-counter").innerHTML = winCounter;
         startGame();

     } else if (numGuesses === 0) {
         document.getElementById("loss-counter").innerHTML = lossCounter++;
         document.getElementById("wrong-guesses").innerHTML = " ";
         alert("You don't have any more guesses");
         startGame();
     }


 }

 startGame();
 document.onkeyup = function(event) {
     /*
     1. take in the letter we type in
     2. pass it through the letter check function
     */
     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
     checkLetters(letterGuessed);
     roundComplete();
 }
