// With thanks to Travery Media for their guide to creating modals

// Get navbar modal element
let navbarModal = document.getElementById("ruleModal");

// Get button that opens modal
let openBtn = document.getElementById("modalNav");

// Get button that closes button
let closeBtn = document.getElementsByClassName("closeNavModal")[0];

// Event listening for opening click
openBtn.addEventListener("click", openModal);

// Event listening for closing click
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
  $("toggleDisplay").toggle('1000');
  $("i",this).toggleClass('fas fa-volume-up fas fa-volume-mute');
});
