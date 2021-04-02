// With thanks to Travery Media for their guide to creating modals
// Get navbar modal element
let navbarModal = document.getElementById("ruleModal");
let winModal = document.getElementById("winModal");
let loseModal = document.getElementById("loseModal");

// Get button that opens modal
let openBtn = document.getElementById("modalNav");

// Get buttons that close modals
let closeBtn = document.getElementsByClassName("closeNavModal")[0];
let closeWinBtn = document.getElementsByClassName("closeWinModal")[0];
let closeLoseBtn = document.getElementsByClassName("closeLoseModal")[0];

// Event listening for opening click on modal
openBtn.addEventListener("click", openModal);

// Event listening for closing click on modals
closeBtn.addEventListener("click", closeModal);
closeWinBtn.addEventListener("click", closeWinModal);
closeLoseBtn.addEventListener("click", closeLoseModal);

// Event listening for closing click outside of modal box
window.addEventListener("click", clickOutsideModal);

//Event listening for click on start button
startButton.addEventListener("click", startGame);

//Event listening for click on reset button
resetButton.addEventListener("click", resetGame);

// Function for opening modal
function openModal() {
  navbarModal.style.display = "block";
}

function winModalTrigger() {
    winModal.style.display = "block";
}

function loseModalTrigger() {
    loseModal.style.display = "block";
}

// Function for closing modals
function closeModal() {
  navbarModal.style.display = "none";
}

function closeWinModal() {
    winModal.style.display = "none";
}

function closeLoseModal() {
    loseModal.style.display = "none";
}

// Function for closing click outside of modal box
function clickOutsideModal(event) {
  if (event.target == navbarModal) {
    navbarModal.style.display = "none";
  }
  if (event.target == winModal) {
    winModal.style.display = "none";
  }
  if (event.target == loseModal) {
    loseModal.style.display = "none";
  }
}