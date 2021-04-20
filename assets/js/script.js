// Game variables
let computerSequence = [];
let playerSequence = [];

let flashCounter;
let flashInterval = 1500;

let intervalRef;
let maxFlashes = 25;

let turn;

let isComputerTurn;
let isPlayerTurn = false;
let isMuted = false;

let hasSequenceMatched;
let hasPlayerWon;

let highestScoreCounter = 0;

// Audio files
// Thanks to https://howlerjs.com/ for their library to help smooth out audio at high game speeds.
const tealAudio = new Howl({
  src: ["assets/audio/Ashort.webm", "assets/audio/Ashort.mp3"],
});
const whiteAudio = new Howl({
  src: ["assets/audio/Eshort.webm", "assets/audio/Eshort.mp3"],
});
const purpleAudio = new Howl({
  src: ["assets/audio/Dsharpshort.webm", "assets/audio/Dsharpshort.mp3"],
});
const greyAudio = new Howl({
  src: ["assets/audio/Bshort.webm", "assets/audio/Bshort.mp3"],
});

// Collection of html elements
const startButton = document.querySelector("#startBtn");
const resetButton = document.querySelector("#resetBtn");
const turnCounter = document.querySelector("#turnsTaken");
const gameLevel = document.querySelector("#level");
const endTurn = document.querySelector("#endTurn");
const highScore = document.querySelector("#highScore");

// Stores new highest scores
const updateHighScore = localStorage.getItem("newHighScore");

// Toggle speaker icons on and off whilst muting audio
$("#toggleToMute").click(function () {
  $("#toggleToMute").addClass("hide-content");
  $("#toggleToAudio").removeClass("hide-content");
  tealAudio.mute(true);
  purpleAudio.mute(true);
  whiteAudio.mute(true);
  greyAudio.mute(true);
});

$("#toggleToAudio").click(function () {
  $("#toggleToAudio").addClass("hide-content");
  $("#toggleToMute").removeClass("hide-content");
  tealAudio.mute(false);
  purpleAudio.mute(false);
  whiteAudio.mute(false);
  greyAudio.mute(false);
});

//Event listening for click on start button
startButton.addEventListener("click", startGame);

//Event listening for click on reset button
resetButton.addEventListener("click", resetGame);

// Starts the game when start button is pressed.
// This changes the game button color,
// Alters the text on Turn and Level text
// And hides the start button/shows the reset button on click
function startGame() {
  startButton.classList.add("hide-content");
  resetButton.classList.remove("hide-content");
  $("#turnsTaken").text("0");
  originalColor();
  prepareGame();
}

// Resets the game when reset button is pressed.
// This clears the current sequence, interval and turns.
// The reset button is hidden and start button appears prompting player.
function resetGame() {
  computerSequence = [];
  playerSequence = [];
  turn = 0;
  isMuted = false;
  clearInterval(intervalRef);
  clearTimeout();
  $("#turnsTaken").text("-");
  $("#level").text("Easy");
  resetButton.classList.add("hide-content");
  startButton.classList.remove("hide-content");
}

// Prepares the game once start button is pressed.
// This sets the variables, creates the sequence to be copied and starts the first turn.
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
  hasSequenceMatched = true;

  for (let i = 0; i < maxFlashes; i++) {
    computerSequence.push(Math.floor(Math.random() * 4) + 1);
  }

  isComputerTurn = true;

  intervalRef = setInterval(gamePlay, flashInterval); // Runs gamePlay function every 800ms.  Light will flash every 800ms
}

// Increments the speed of the flashes after the turn counter reaches specific break points.
function checkForLevelIncrement(turn) {
  if (turn <= 4) {
    flashInterval = 1500;
    $("#level").text(" Easy");
  } else if (turn >= 5 && turn < 7) {
    flashInterval = 1200;
    $("#level").text(" Medium");
  } else if (turn >= 8 && turn < 10) {
    flashInterval = 1000;
    $("#level").text(" Hard");
  } else if (turn >= 11 && turn < 15) {
    flashInterval = 800;
    $("#level").text(" Fiendish");
  } else if (turn >= 16 && turn < maxFlashes) {
    flashInterval = 400;
    $("#level").text(" Ghastly");
  }
}

// Checks whether it's the players turn or computer turn
function gamePlay() {
  isPlayerTurn = false;
  $(".btn-lg").css("cursor", "pointer");

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
    $(".btn-lg").css("cursor", "not-allowed");
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
    }, 200);
  }
}

// Function to play combine the audio visual cues when the sound is not muted.
function playColorAudio(colorFunction, varAudio) {
  colorFunction();
  if (!isMuted) {
    varAudio.play();
  }
}

// Event Listeners for player clicking buttons during gameplay.  Checks if it's the players turn to allow clicks.
// iterates through the player sequence, checks if the player was correct and then calls that buttons function.
// If not a win then after a set amount of time the color returns to the original color.
function playerBtnClick(playerSeqPushNumber, btnFlashColor, btnFlashAudio) {
  if (isPlayerTurn) {
    playerSequence.push(playerSeqPushNumber);
    checkAnswer();
    playColorAudio(btnFlashColor, btnFlashAudio);
  }
  if (!hasPlayerWon) {
    setTimeout(() => {
      originalColor();
    }, 300);
  }
}

$(".btn-teal").click(function () {
  playerBtnClick(1, flashTeal, tealAudio);
});

$(".btn-white").click(function () {
  playerBtnClick(2, flashWhite, whiteAudio);
});

$(".btn-purple").click(function () {
  playerBtnClick(3, flashPurple, purpleAudio);
});

$(".btn-grey").click(function () {
  playerBtnClick(4, flashGrey, greyAudio);
});

// Checks whether the player answer during gameplay
function checkAnswer() {
  // Checks if the player sequence and computer sequence do not match, if they don't the the !hasSequenceMatched is called
  if (playerSequence[playerSequence.length - 1] !== computerSequence[playerSequence.length - 1]) hasSequenceMatched = false;

  // checks if the player sequence has met the win game criteria and calls game win function
  if (playerSequence.length == maxFlashes && hasSequenceMatched) {
    winGame();
  }

  // If the player sequence does not match the computer sequence
  if (!hasSequenceMatched) {
    flashAll();
    turnCounter.innerHTML = "GHASTLY!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      originalColor();
    }, flashInterval);

    isMuted = true;
    // If the game is lost the highest score modal is triggered - stored in modal.js
    highScoreModalTrigger();
  }

  // If the player is correct in their sequence but has not met the win criteria
  if (turn == playerSequence.length && hasSequenceMatched && !hasPlayerWon) {
    turn++;
    checkForLevelIncrement(turn);
    highestScoreCounter++;
    playerSequence = [];
    isComputerTurn = true;
    flashCounter = 0;
    turnCounter.innerHTML = turn;
    intervalRef = setInterval(gamePlay, flashInterval);
  }
  // Checks to see if a new highest score is reached
  checkForNewHighScore();
}

// Instructions for if the player reaches maxFlashes
function winGame() {
  flashAll();
  turnCounter.innerHTML = "Win";
  isPlayerTurn = false;
  hasPlayerWon = true;
  winModalTrigger();
}

// Local storage of the games highest scores
// Checks to see if a new highest score is reached
function checkForNewHighScore() {
  if (turn > highScore.innerHTML) {
    highScore.innerHTML = highestScoreCounter;
    turn.toString();
    localStorage.setItem("newHighScore", turn);
    return true;
  }
}

// Updates the highest score if necessary
function setNewHighScore() {
  if (turn > highScore.innerHTML) {
    highScore.innerHTML = updateHighScore;
  }
}

// Gameplay Button Flashes
// Makes all buttons opacity change
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

// Makes all buttons return to full opacity
function originalColor() {
  $(".btn-teal").css("background-color", "#4ea0ae");
  $(".btn-white").css("background-color", "#edeffb");
  $(".btn-purple").css("background-color", "#6c53a4");
  $(".btn-grey").css("background-color", "#040000");
}
