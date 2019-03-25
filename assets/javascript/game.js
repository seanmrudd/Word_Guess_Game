//Declare variables

//Make an array of words to choose from
var wordBank = ["riot", "nexus", "jungle", "rift", "baron", "marksman", "mage", "assassin", "support", "pentakill", "inhibitor"]
// Press any key to start, hide instructions

console.log(wordBank)

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];}

    // Game picks random word from array
// Amount of spaces for letters appear for word picked
// Player picks letter from A-Z
// If letter is in the word, it shows up in the correct blanks space
// If letter is not in the word, it shows up in the "incorrect box"
// If amount of incorrect letters reaches 10, game ends, player loses
// If all the letters are guessed, game ends, player wins
// Game ends, next key restarts game