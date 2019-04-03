//Declare variables

//Make an array of words to choose from
var wordBank = ["riot", "rift", "mage", "nexus", "baron", "jungle", "support", "marksman", "assassin", "summoner", "pentakill", "inhibitor"]
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var guessesLeft = 15;
var guessesSoFar = [];
var winsText = document.getElementById("wins-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

// Press any key to start, hide instructions
// Game picks random word from array
//Chooses Random Word

function gameStart() {

    var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(computerGuess)
    console.log(computerGuess.length)

    for (let i = 0; i < computerGuess.length; i++) {
        var letterSpaces = newArray [i];
        
    }


    document.onkeyup = function () {
        var userGuess = event.key.toLowerCase();
        console.log(userGuess)

       
    }

    winsText.textContent = "Wins: " + wins;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses so far: " + guessesSoFar;
}
// Grab array of letters for random word picked
// Insert word letters of word into guess box
// Convert letters to underscores
                        // Amount of spaces for letters appear for word picked
// Player picks letter from A-Z
// If letter is in the array, it replaces underscore with letter
// If letter is not in the word, it shows up in the "incorrect box"
// If amount of incorrect letters reaches 10, game ends, player loses
// If all the letters are guessed, game ends, player wins
// Game ends, prompt appears to restart game by pressing any key