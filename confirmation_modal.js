document.addEventListener("DOMContentLoaded", () => {
  // Variables locales pour la modale confirmation
  const confirmationModal = document.getElementById("confirmation_modal");
  const closeButton = document.getElementById("close_button");
  const confirmClose = document.getElementById("confirm_close");

  if (!confirmationModal) return; // sécurité si la modale n'existe pas

  // Ouvrir la modale
  function launchConfirmationModal() {
    confirmationModal.classList.add("show");
  }

  // Fermer la modale
  function closeConfirmationModal() {
    confirmationModal.classList.remove("show");
  }

  // Ajouter les événements
  if (closeButton)
    closeButton.addEventListener("click", closeConfirmationModal);
  if (confirmClose)
    confirmClose.addEventListener("click", closeConfirmationModal);

  // Fermer via Échap
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeConfirmationModal();
    }
  });

  // Exporter la fonction pour pouvoir ouvrir la modale depuis le formulaire
  window.launchConfirmationModal = launchConfirmationModal;
});
