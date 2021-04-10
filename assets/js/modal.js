// With thanks to Travery Media for their guide to creating modals
// Get navbar modal element
let navbarModal = document.getElementById("navbarModal");
let scoreModal = document.getElementById("scoreModal");

// Get button that opens modal
let openBtn = document.getElementById("modalNav");

// Get buttons that close modals
let closeBtn = document.getElementsByClassName("closeNavModal")[0];
//let closeScoreBtn = document.getElementsByClassName("closeScoreModal")[0];

// Event listening for opening click on modal
openBtn.addEventListener("click", openModal);

// Event listening for closing click on modals
closeBtn.addEventListener("click", closeModal);
//closeScoreBtn.addEventListener("click", closeScoreModal);

// Event listening for closing click outside of modal box
window.addEventListener("click", clickOutsideModal);

// Function for opening modal
function openModal() {
  navbarModal.style.display = "block";
}

function highScoreModalTrigger() {
    scoreModal.style.display = "block";
    endTurn.innerHTML = turn;
    setNewHighScore();
}

// Function for closing modals
function closeModal() {
  navbarModal.style.display = "none";
}

function closeScoreModal() {
    scoreModal.style.display = "none";
}

// Function for closing click outside of modal box
function clickOutsideModal(event) {
  if (event.target == navbarModal) {
    navbarModal.style.display = "none";
    console.log('clicked');
  }
  if (event.target == scoreModal) {
    scoreModal.style.display = "none";
  }
}