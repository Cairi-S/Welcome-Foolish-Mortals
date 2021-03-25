// With thanks to Travery Media for their guide to creating modals

// Get navbar modal element
let navbarModal = document.getElementById("ruleModal");

// Get button that opens modal
let openBtn = document.getElementById("modalNav");

// Get button that closes modal
let closeBtn = document.getElementsByClassName("closeNavModal")[0];

// Get button that starts the game
let startBtn = document.getElementById("startBtn");

// Get game buttons of different colors
const tealBtn = document.querySelector(".btn-teal");
const whiteBtn = document.querySelector(".btn-white");
const purpleBtn = document.querySelector(".btn-purple");
const greyBtn = document.querySelector(".btn-grey");


// Event listening for opening click on modal
openBtn.addEventListener("click", openModal);

// Event listening for closing click on modal
closeBtn.addEventListener("click", closeModal);

// Event listening for closing click outside of modal box
window.addEventListener("click", clickOutsideModal);

// Function for opening modal
function openModal() {
    navbarModal.style.display = "block";
}

// Function for closing modal
function closeModal() {
    navbarModal.style.display = "none";
}

// Function for closing click outside of modal box
function clickOutsideModal(event) {
    if(event.target == navbarModal) {
      navbarModal.style.display = "none";
    }
}

// Changes turn counter to 0 on click 
$("#startBtn").click(function() {
    $("#turnsTaken").text("0");
    $(".btn-teal").css("background-color", "#4ea0ae");
    $(".btn-white").css("background-color", "#edeffb");
    $(".btn-purple").css("background-color", "#6c53a4");
    $(".btn-grey").css("background-color", "#040000");
});

// Toggle mute icon on and off 
$('#toggleMute').click(function() {
  $("toggleSound").toggle('1000');
  $("i",this).toggleClass('fas fa-volume-up fas fa-volume-mute');
});
