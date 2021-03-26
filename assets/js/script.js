// Mute/Sound functionalty
let soundOn = true;

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


// Toggle mute icon on and off 
$('#toggleMute').click(function() {
  $("toggleSound").toggle('1000');
  $("i",this).toggleClass('fas fa-volume-up fas fa-volume-mute');
});


// Changes turn counter to 0 on click 
$("#startBtn").click(function() {
    $("#turnsTaken").text("0");
    $(".btn-teal").css("background-color", "rgba(78, 160, 174, 0.5)");
    $(".btn-white").css("background-color", "rgba(237, 239, 251, 0.5)");
    $(".btn-purple").css("background-color", "rgba(108, 83, 164, 0.5)");
    $(".btn-grey").css("background-color", "rgba(4, 0, 0, 0.5)");
});
