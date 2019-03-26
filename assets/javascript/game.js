//Declare variables

//Make an array of words to choose from
var wordBank = ["riot", "rift", "mage", "nexus", "baron", "jungle", "support", "marksman", "assassin", "summoner", "pentakill", "inhibitor"]

    // {
    // "riot": ["r", "i", "o", "t"],
    // "rift": ["r", "i", "f", "t"],
    // "mage": ["m", "a", "g", "e"],
    // "nexus": ["n", "e", "x", "u", "s"],
    // "baron": ["b", "a", "r", "o", "n"],
    // "jungle": ["j", "u", "n", "g", "l", "e"],
    // "support": ["s", "u", "p", "p", "o", "r", "t"],
    // "marksman": ["m", "a", "r", "k", "s", "m", "a", "n"],
    // "assassin": ["a", "s", "s", "i", "s", "s", "i", "n"],
    // "summoner": ["s", "u", "m", "m", "o", "n", "e", "r"],
    // "pentakill": ["p", "e", "n", "t", "a", "k", "i", "l", "l"],
    // "inhibitor": ["i", "n", "h", "i", "b", "i", "t", "o", "r"]}
    
console.log(wordBank)

// Press any key to start, hide instructions
// Game picks random word from array

document.onkeyup = function(event) {
    // Starts game
    var userGuess = event.key;
    //Chooses Random Word
    var computerWordPick = wordBank[Math.floor(Math.random() *wordBank.length)];
    console.log(computerWordPick)
    var str.length(computerWordPick)
    }




    
// Amount of spaces for letters appear for word picked
// Player picks letter from A-Z
// If letter is in the word, it shows up in the correct blank space
// If letter is not in the word, it shows up in the "incorrect box"
// If amount of incorrect letters reaches 10, game ends, player loses
// If all the letters are guessed, game ends, player wins
// Game ends, prompt appears to restart game by pressing any key