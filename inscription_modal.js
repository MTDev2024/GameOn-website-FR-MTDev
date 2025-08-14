document.addEventListener("DOMContentLoaded", () => {
  // Variables locales pour la modale formulaire
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const closeBtn = modalbg ? modalbg.querySelector(".close") : null;

  if (!modalbg) return; // sécurité si la modale n'existe pas

  // Ouvrir la modale
  function launchFormModal() {
    modalbg.classList.add("show");
  }

  // Fermer la modale
  function closeFormModal() {
    modalbg.classList.remove("show");
  }

  // Ajouter les événements
  modalBtn.forEach((btn) => btn.addEventListener("click", launchFormModal));
  if (closeBtn) closeBtn.addEventListener("click", closeFormModal);

  // Fermer via Échap
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFormModal();
    }
  });
});
