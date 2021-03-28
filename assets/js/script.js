// Game variables
let sequence = [];
let playerSequence = [];
let flash;
let turnSpeed;
let turn;
let good;
let win;



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
  flashColor();
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
    good = true;

    for (let i = 0 ; i < 100 ; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
    
    computerPlay = true;

    turnSpeed = setInterval(gamePlay, 1000);
}

// Makes all buttons opacity change
function flashColor() {
    $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
    $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
    $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
    $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
}
