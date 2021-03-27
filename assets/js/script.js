// Game variables
let gameSequence = [];
let playerSequence = [];
let flash;
let noteLength;
let turnCount;
let correctAnswer;
let completed;
let computerPlay;
let userPlay;
let gamePlay = false;
let sound = true;
let on = false;


// Audio files
const tealAudio = new Audio("assets/audio/AEighth.mp3");
const whiteAudio = new Audio("assets/audio/EEighth.mp3");
const purpleAudio = new Audio("assets/audio/DEighth.mp3");
const greyAudio = new Audio("assets/audio/BEighth.mp3");

const teal = $(".btn-teal");

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
    gameSequence = [];
    playerSequence = [];
    turnCount = 0;
    flash = 0;
    noteLength = 0;
    correctAnswer = true;

    for (var i = 0; i < 100; i++) {
        gameSequence.push(Math.floor(Math.random() * 4) + 1);
    }
    
    computerPlay = true;

    noteLength = setInterval(computerTurn, 1000);
}

// Test to check audio linked successfully
$(".btn-teal").click(function() {
      console.log('clicked')
      $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
      tealAudio.play();
    });

    $(".btn-white").click(function() {
      console.log('clicked')
      $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
      whiteAudio.play();
    });

    $(".btn-purple").click(function() {
      console.log('clicked')
      $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
      purpleAudio.play();
    });

    $(".btn-grey").click(function() {
      console.log('clicked')
      $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
      greyAudio.play();
    });

function buttonTeal() {
   
}

function buttonWhite() {
    
}

function buttonPurple() {

}

function buttonGrey() {
    
}

function gameTurn() {
 
}


function originalColor() {
    $(".btn-teal").css("background-color", "#4ea0ae");
    $(".btn-white").css("background-color", "#edeffb");
    $(".btn-purple").css("background-color", "#6c53a4");
    $(".btn-grey").css("background-color", "#040000");
}

// Changes button opacity on button clicks or 
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
