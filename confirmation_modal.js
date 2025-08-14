// --- Déclarer et exporter la fonction globalement
function launchConfirmationModal() {
  const confirmationModal = document.getElementById("confirmation_modal");
  if (confirmationModal) confirmationModal.classList.add("show");
}
window.launchConfirmationModal = launchConfirmationModal;

// --- Fermer la modale après DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const confirmationModal = document.getElementById("confirmation_modal");
  if (!confirmationModal) return;

  const closeButton = document.getElementById("close_button");
  const confirmClose = document.getElementById("confirm_close");

  function closeConfirmationModal() {
    confirmationModal.classList.remove("show");
  }

  if (closeButton)
    closeButton.addEventListener("click", closeConfirmationModal);
  if (confirmClose)
    confirmClose.addEventListener("click", closeConfirmationModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeConfirmationModal();
  });
});
