// Game variables
let sequence = [];
let playerSequence = [];
let flash;
let turnSpeed;
let turn;
let computerPlay;
let playerTurn = false;
let sound = true;
let correct;
let win;

// Audio files
const tealAudio = new Audio("assets/audio/Ashort.mp3");
const whiteAudio = new Audio("assets/audio/Eshort.mp3");
const purpleAudio = new Audio("assets/audio/Dsharpshort.mp3");
const greyAudio = new Audio("assets/audio/Bshort.mp3");


// Gets different html elements
const startButton = document.querySelector('#startBtn');
const resetButton = document.querySelector('#resetBtn');
const turnCounter = document.querySelector('#turnsTaken');

// With thanks to Travery Media for their guide to creating modals
// Get navbar modal element
let navbarModal = document.getElementById("ruleModal");

// Get button that opens modal
let openBtn = document.getElementById("modalNav");

// Get button that closes modal
let closeBtn = document.getElementsByClassName("closeNavModal")[0];


// Event listening for opening click on modal
openBtn.addEventListener("click", openModal);

// Event listening for closing click on modal
closeBtn.addEventListener("click", closeModal);

// Event listening for closing click outside of modal box
window.addEventListener("click", clickOutsideModal);

//Event listening for click on start button
startButton.addEventListener("click", startGame);

// Function for opening modal
function openModal() {
    navbarModal.style.display = "block";
};

// Function for closing modal
function closeModal() {
    navbarModal.style.display = "none";
};

// Function for closing click outside of modal box
function clickOutsideModal(event) {
    if(event.target == navbarModal) {
      navbarModal.style.display = "none";
    }
};

// Starts the game by changing button color, the number in the turn counter and hiding the start button on click
function startGame() {
  startButton.classList.add('hide-content');
  resetButton.classList.remove('hide-content');
  $("#turnsTaken").text("0");
  originalColor();
  beginGame();
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
    correct = true;

    for (let i = 0 ; i < 100 ; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(sequence);
    
    computerPlay = true;

    turnSpeed = setInterval(gamePlay, 800);
}

// Checks whether it's the players turn
function gamePlay() {
    playerTurn = false

    // When the number of flashes is equal to number of turns interval cleared the computers turn is over and the game is reset for the user to play
    if (flash == turn) {
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
            if (sequence[flash] == 1) teal();
            if (sequence[flash] == 2) white();
            if (sequence[flash] == 3) purple();
            if (sequence[flash] == 4) grey();
            flash++;
        }, 200);

    }
}

// Answering functions for linking to sequence numbers
function teal() {
    if (sound) {
      tealAudio.play();
    }
    sound = true;
    $(".btn-teal").css("background-color", "#4ea0ae");
}

function white() {
    if (sound) {
    whiteAudio.play();
    }
    sound = true;
    $(".btn-white").css("background-color", "#edeffb");
}

function purple() {
    if (sound) {
      purpleAudio.play();
    }
    sound = true;
    $(".btn-purple").css("background-color", "#6c53a4");
}

function grey() {
    if (sound) {
      greyAudio.play();
    }
    sound = true;
    $(".btn-grey").css("background-color", "#040000");
}

// Event Listeners for buttons during gameplay.  Checks if it's the players turn to allow clicks.
// iterates through the player sequence, checks if the player was correct and then calls that futtons function.
// If not a win then after a set amount of time the color returns to the original color.
$(".btn-teal").click(function() {
      if (playerTurn) {
        playerSequence.push(1);
        checkAnswer();
        teal();
        if(!win) {
            setTimeout(() => {
                originalColor();
            }, 300);
        console.log('clicked')
        }
      } 
    });

    $(".btn-white").click(function() {
          if (playerTurn) {
        playerSequence.push(2);
        checkAnswer();
        white();
        if(!win) {
            setTimeout(() => {
                originalColor();
            }, 300);
        console.log('clicked')
        }
      } 
    });


    $(".btn-purple").click(function() {
      if (playerTurn) {
        playerSequence.push(3);
        checkAnswer();
        purple();
        if(!win) {
            setTimeout(() => {
                originalColor();
            }, 300);
        console.log('clicked')
        }
      } 
    });

    $(".btn-grey").click(function() {
      if (playerTurn) {
        playerSequence.push(4);
        checkAnswer();
        grey();
        if(!win) {
            setTimeout(() => {
                originalColor();
            }, 300);
        console.log('clicked')
        }
      } 
    });

// Checks whether the player answer during gameplay
function checkAnswer() {
    // Checks if the player sequence equals the computer sequence
    if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) correct = false;

    // checks if the player sequence has met the win game criteria and calls game win function
    if (playerSequence.length == 20 && correct) {
        winGame();
    }

    // If the player sequence does not match the computer sequence
    if (correct == false) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() =>{
            turnCounter.innerHTML = turn;
            originalColor();
        }, 800);

        sound = false;
        // what else to happen, lose modal, sound??
    }

    // If the player is correct in their sequence but has not met the win criteria
    if (turn == playerSequence.length && correct && !win) {
        turn++;
        playerSequence = [];
        computerPlay = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        turnSpeed = setInterval(gamePlay, 800);
    }
}

// Makes all buttons opacity change
function originalColor() {
    $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
    $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
    $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
    $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
}

// Makes all buttons return to full opacity
function flashColor() {
    $(".btn-teal").css("background-color", "#4ea0ae");
    $(".btn-white").css("background-color", "#edeffb");
    $(".btn-purple").css("background-color", "#6c53a4");
    $(".btn-grey").css("background-color", "#040000");
}

function winGame(){
    flashColor();
    turnCounter.innerHTML = "Win"
    playerTurn = false;
    win = true;
}
