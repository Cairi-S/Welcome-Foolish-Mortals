// Game variables
let sequence = [];
let playerSequence = [];
let flash;
let turnSpeed;
let turn;
let highscore;
let computerPlay;
let playerTurn = false;
let sound = true;
let correct;
let win;

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
  beginGame();
}
// Resets the game clearing sequences, intervals and turns.  Reset button is hidden and start button appears prompting player to restart

function resetGame() {
  sequence = [];
  playerSequence = [];
  turn = 0;
  clearInterval(turnSpeed);
  clearTimeout();
  $("#turnsTaken").text("-");
  resetButton.classList.add("hide-content");
  startButton.classList.remove("hide-content");
}

// Starts the first turn resetting the game, creating the randomised sequence and passing to the computer.
function beginGame() {
  win = false;
  sequence = [];
  playerSequence = [];
  flash = 0;
  turnSpeed = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  highscore = 1;
  highScore.innerHTML = 1;
  correct = true;

  for (let i = 0; i < 5; i++) {
    sequence.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(sequence);

  computerPlay = true;

  turnSpeed = setInterval(gamePlay, 800);
}

// Checks whether it's the players turn
function gamePlay() {
  playerTurn = false;

  // When the number of flashes is equal to number of turns interval cleared the computers turn is over and the game is reset for the user to play
  if (flash === turn) {
    clearInterval(turnSpeed);
    computerPlay = false;
    originalColor();
    playerTurn = true;
  }

  // If it is the computers turn a time is set for the flashes
  if (computerPlay) {
    originalColor();
    setTimeout(() => {
      // Links the sequence numbers to the buttons, answering functions below
      if (sequence[flash] === 1) {
        playColorAudio(flashTeal, "#4ea0ae", tealAudio);
      }
      if (sequence[flash] === 2) {
        playColorAudio(flashWhite, "#edeffb", whiteAudio);
      }
      if (sequence[flash] === 3) {
        playColorAudio(flashPurple, "#6c53a4", purpleAudio);
      }
      if (sequence[flash] === 4) {
        playColorAudio(flashGrey, "#040000", greyAudio);
      }
      flash++;
    }, 200);
  }
}

function playColorAudio(colorFunction, colorHex, varAudio) {
  colorFunction();
  if (sound) {
    varAudio.play();
  }
}

// Event Listeners for buttons during gameplay.  Checks if it's the players turn to allow clicks.
// iterates through the player sequence, checks if the player was correct and then calls that futtons function.
// If not a win then after a set amount of time the color returns to the original color.
$(".btn-teal").click(function () {
  if (playerTurn) {
    playerSequence.push(1);
    checkAnswer();
    playColorAudio(flashTeal, "#4ea0ae", tealAudio);
    if (!win) {
      setTimeout(() => {
        originalColor();
      }, 300);
      console.log("clicked");
    }
  }
});

$(".btn-white").click(function () {
  if (playerTurn) {
    playerSequence.push(2);
    checkAnswer();
    playColorAudio(flashWhite, "#edeffb", whiteAudio);
    if (!win) {
      setTimeout(() => {
        originalColor();
      }, 300);
      console.log("clicked");
    }
  }
});

$(".btn-purple").click(function () {
  if (playerTurn) {
    playerSequence.push(3);
    checkAnswer();
    playColorAudio(flashPurple, "#6c53a4", purpleAudio);
    if (!win) {
      setTimeout(() => {
        originalColor();
      }, 300);
      console.log("clicked");
    }
  }
});

$(".btn-grey").click(function () {
  if (playerTurn) {
    playerSequence.push(4);
    checkAnswer();
    playColorAudio(flashGrey, "#040000", greyAudio);
    if (!win) {
      setTimeout(() => {
        originalColor();
      }, 300);
      console.log("clicked");
    }
  }
});

// Checks whether the player answer during gameplay
function checkAnswer() {
  // Checks if the player sequence equals the computer sequence
  if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) correct = false;

  // checks if the player sequence has met the win game criteria and calls game win function
  if (playerSequence.length == 3 && correct) {
    winGame();
  }

  // If the player sequence does not match the computer sequence
  if (!correct) {
    flashAll();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      originalColor();
    }, 800);

    sound = false;
    
    loseModalTrigger();
  }

  // If the player is correct in their sequence but has not met the win criteria
  if (turn == playerSequence.length && correct && !win) {
    turn++;
    highscore++;
    playerSequence = [];
    computerPlay = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    highScore.innerHTML = highscore;
    turnSpeed = setInterval(gamePlay, 800);
  }
}

// Makes all buttons return to full opacity

function flashTeal() {
  $(".btn-teal").css("background-color", "#4ea0ae");
}

function flashWhite() {
  $(".btn-white").css("background-color", "#edeffb");
}

function flashPurple() {
  $(".btn-purple").css("background-color", "#6c53a4");
}

function flashGrey() {
  $(".btn-grey").css("background-color", "#040000");
}

function flashAll() {
  flashTeal();
  flashWhite();
  flashPurple();
  flashGrey();
}

// Makes all buttons opacity change
function originalColor() {
  $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
  $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
  $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
  $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
}

function winGame() {
  flashAll();
  turnCounter.innerHTML = "Win";
  playerTurn = false;
  win = true;
  winModalTrigger();
}


