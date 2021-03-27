// Game variables
let compSequence = [];
let turn = 0;



// Gets the start button
const startButton = document.querySelector('#startBtn');

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

// Increases the number of button presses in the sequence
function increaseSequence() {
    const buttons = ["teal", "white", "purple", "grey"];
    const randomiser = buttons[Math.floor(Math.random() * buttons.length)];
    return randomiser;
}

// Increases the turn counter by 1, copies the previous order of button presses and increases by 1
function increaseTurn() {
    turn += 1;
    const contSequence = [...compSequence];
    contSequence.push(increaseSequence());
}

// Starts the game by changing button color, the number in the turn counter and hiding the start button on click
function startGame() {
  startButton.classList.add('hide-content');
  $("#turnsTaken").text("0");
  flashColor();
}

// Makes all buttons opacity change
function flashColor() {
    $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
    $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
    $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
    $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
}
