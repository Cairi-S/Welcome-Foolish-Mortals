let gameOrder = [];
let playerOrder = [];
let flash;
let noteLength;
let turnCount;
let correctAnswer;
let completed;
let computerPlay;
let userPlay;


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

// On click of start button changes colors and starts game 
$(document).ready(function() {
  $("#startBtn").click(function() {
      flashColor();
      gameStart();
      $("#turnsTaken").text("0");
    });
});


function gameStart() {

    completed = false
    gameOrder = [];
    playerOrder = [];
    turnCount = 0;
    flash = 0;
    noteLength = 0;
    correctAnswer = true;

    for (var i = 0; i < 100; i++) {
        gameOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    
    computerPlay = true;

    noteLength = setInterval(computerTurn, 1000);
}

function buttonTeal() {

}

function buttonWhite() {

}

function buttonPurple() {

}

function buttonGrey() {

}

function computerTurn() {

}

function userTurn() {

}

function originalColor() {
    $(".btn-teal").css("background-color", "#4ea0ae");
    $(".btn-white").css("background-color", "#edeffb");
    $(".btn-purple").css("background-color", "#6c53a4");
    $(".btn-grey").css("background-color", "#040000");
}

function flashColor() {
    $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
    $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
    $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
    $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
}

function checkAnswer() {

}

function increaseTurn() {

}

function gameWin() {

}


// Toggle mute icon on and off 
$('#toggleMute').click(function() {
  $("toggleSound").toggle('1000');
  $("i",this).toggleClass('fas fa-volume-up fas fa-volume-mute');
});
