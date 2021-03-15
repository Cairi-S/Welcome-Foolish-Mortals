// Get navbar modal element
var navbarModal = document.getElementById("ruleModal");

// Get button that opens modal
var openBtn = document.getElementById("modalNav");

// Get button that closes button
var closeBtn = document.getElementsByClassName("closeNavModal")[0];

// Event listening for click
openBtn.addEventListener("click", openModal);

function openModal() {
    navbarModal.style.display = "block";
}
