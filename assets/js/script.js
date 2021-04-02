// Game variables
let computerSequence = [];
let playerSequence = [];

let flashCounter;
let flashInterval = 800;

let intervalRef;
let maxFlashes = 10;

let turn;

let highestScoreCounter;
let isComputerTurn;
let isPlayerTurn = false;
let isMuted = false;

let hasSequenceMatched;
let hasPlayerWon;

// Audio files
const tealAudio = new Audio("assets/audio/Ashort.mp3");
tealAudio.muted = false;
const whiteAudio = new Audio("assets/audio/Eshort.mp3");
whiteAudio.muted = false;
const purpleAudio = new Audio("assets/audio/Dsharpshort.mp3");
purpleAudio.muted = false;
const greyAudio = new Audio("assets/audio/Bshort.mp3");
greyAudio.muted = false;

const audioFileArray = [tealAudio, whiteAudio, purpleAudio, greyAudio];

// Gets different html elements
const startButton = document.querySelector("#startBtn");
const resetButton = document.querySelector("#resetBtn");
const turnCounter = document.querySelector("#turnsTaken");
const highScore = document.querySelector("#highScore");

// Toggle mute icon on and off
$("#toggleMute").click(function () {
  $("i", this).toggleClass("fas fa-volume-up fas fa-volume-mute");
  audioFileArray.forEach(eachAudio => {
      eachAudio.muted = !eachAudio.muted;
  });
});

// Starts the game by changing button color, the number in the turn counter and hiding the start button on click
function startGame() {
  startButton.classList.add("hide-content");
  resetButton.classList.remove("hide-content");
  $("#turnsTaken").text("0");
  originalColor();
  prepareGame();
}

// Resets the game clearing sequences, intervals and turns.  Reset button is hidden and start button appears prompting player to restart
function resetGame() {
  computerSequence = [];
  playerSequence = [];
  turn = 0;
  isMuted = false;
  clearInterval(intervalRef);
  clearTimeout();
  $("#turnsTaken").text("-");
  resetButton.classList.add("hide-content");
  startButton.classList.remove("hide-content");
}

// Prepares the game, setting the variables, creating the sequence to be copied and starts the first turn.
function prepareGame() {
  hasPlayerWon = false;
  isMuted = false;
  computerSequence = [];
  playerSequence = [];
  flashCounter = 0;
  intervalRef = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  highestScoreCounter = 1;
  highScore.innerHTML = 1;
  hasSequenceMatched = true;

  for (let i = 0; i < maxFlashes; i++) {
    computerSequence.push(Math.floor(Math.random() * 4) + 1);
  }

  isComputerTurn = true;

  intervalRef = setInterval(gamePlay, flashInterval); // Runs gamePlay function every 800ms.  Light will flash every 800ms
}

// Checks whether it's the players turn or computer turn
function gamePlay() {
  isPlayerTurn = false;

  // When the number of flashes is equal to number of turns the interval cleared the computers turn is over and the game is set for the user to play
  if (flashCounter === turn) {
    clearInterval(intervalRef);
    isComputerTurn = false;
    originalColor();
    isPlayerTurn = true;
  }

  // If it is the computers turn a time is set for the flashes
  if (isComputerTurn) {
    isPlayerTurn = false;
    originalColor();
    setTimeout(() => {
      // Links the sequence numbers to the buttons, answering functions below
      if (computerSequence[flashCounter] === 1) {
        playColorAudio(flashTeal, tealAudio);
      }
      if (computerSequence[flashCounter] === 2) {
        playColorAudio(flashWhite, whiteAudio);
      }
      if (computerSequence[flashCounter] === 3) {
        playColorAudio(flashPurple, purpleAudio);
      }
      if (computerSequence[flashCounter] === 4) {
        playColorAudio(flashGrey, greyAudio);
      }
      flashCounter++;
    }, 200); // waits 200ms and then flashes the number/color/audio.
  }
}

function playColorAudio(colorFunction, varAudio) {
  colorFunction();
  if (!isMuted) {
    varAudio.play();
  }
}

// Event Listeners for buttons during gameplay.  Checks if it's the players turn to allow clicks.
// iterates through the player sequence, checks if the player was correct and then calls that futtons function.
// If not a win then after a set amount of time the color returns to the original color.
$(".btn-teal").click(function () {
  if (isPlayerTurn) {
    playerSequence.push(1);
    checkAnswer();
    playColorAudio(flashTeal, tealAudio);
    }
    if (!hasPlayerWon) {
      setTimeout(() => {
        originalColor();
      }, 300); // Color user clicks clears after this amount of time
  }
});

$(".btn-white").click(function () {
  if (isPlayerTurn) {
    playerSequence.push(2);
    checkAnswer();
    playColorAudio(flashWhite, whiteAudio);
    }
    if (!hasPlayerWon) {
      setTimeout(() => {
        originalColor();
      }, 300); //length of flash on player click
  }
});

$(".btn-purple").click(function () {
  if (isPlayerTurn) {
    playerSequence.push(3);
    checkAnswer();
    playColorAudio(flashPurple, purpleAudio);
    
    }
    if (!hasPlayerWon) {
      setTimeout(() => {
        originalColor();
      }, 300); //length of flash on player click
  }
});

$(".btn-grey").click(function () {
  if (isPlayerTurn) {
    playerSequence.push(4);
    checkAnswer();
    playColorAudio(flashGrey, greyAudio);
    
    }
    if (!hasPlayerWon) {
      setTimeout(() => {
        originalColor();
      }, 300); //length of flash on player click
  }
});

// Checks whether the player answer during gameplay
function checkAnswer() {
  // Checks if the player sequence and computer sequence do not match, if they don't the the !hasSequenceMatched is called
  if (playerSequence[playerSequence.length - 1] !== computerSequence[playerSequence.length - 1]) hasSequenceMatched = false;

  // checks if the player sequence has met the win game criteria and calls game win function
  if (playerSequence.length == 10 && hasSequenceMatched) {
    winGame();
  }

  // If the player sequence does not match the computer sequence
  if (!hasSequenceMatched) {
    flashAll();
    turnCounter.innerHTML = "GHASTLY!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      originalColor();
    }, flashInterval); //sets the time for the turn counter and buttons to return to original color

    isMuted = true;
    
    loseModalTrigger();
  }

  // If the player is correct in their sequence but has not met the win criteria
  if (turn == playerSequence.length && hasSequenceMatched && !hasPlayerWon) {
    turn++;
    highestScoreCounter++;
    playerSequence = [];
    isComputerTurn = true;
    flashCounter = 0;
    turnCounter.innerHTML = turn;
    highScore.innerHTML = highestScoreCounter;
    intervalRef = setInterval(gamePlay, flashInterval); //sets speed of note repetition
  }
}

// Makes all buttons return to full opacity

function flashTeal() {
  $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
}

function flashWhite() { 
  $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
}

function flashPurple() { 
  $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
}

function flashGrey() {
  $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
}

function flashAll() {
  flashTeal();
  flashWhite();
  flashPurple();
  flashGrey();
}

// Makes all buttons opacity change
function originalColor() {
  $(".btn-teal").css("background-color", "#4ea0ae");
  $(".btn-white").css("background-color", "#edeffb");
  $(".btn-purple").css("background-color", "#6c53a4");
  $(".btn-grey").css("background-color", "#040000");
}

function winGame() {
  flashAll();
  turnCounter.innerHTML = "Win";
  isPlayerTurn = false;
  hasPlayerWon = true;
  winModalTrigger();
}


