const confirmationModal = document.getElementById("confirmation_modal");
const closeButton = document.getElementById("close_button");

function launchModal() {
  confirmationModal.style.display = "block";
}

function closeModal() {
  confirmationModal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
