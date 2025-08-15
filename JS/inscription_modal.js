// --- Déclarer et exporter la fonction pour ouverture globale
function launchInscriptionModal() {
  const modalbg = document.querySelector(".bground");
  if (modalbg) modalbg.classList.add("show");
}
window.launchInscriptionModal = launchInscriptionModal;

// --- Fermer la modale après DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const modalbg = document.querySelector(".bground");
  if (!modalbg) return;

  const closeBtn = modalbg.querySelector(".close");
  const modalBtn = document.querySelectorAll(".modal-btn");

  function closeFormModal() {
    modalbg.classList.remove("show");
  }

  // Boutons ouverture
  modalBtn.forEach((btn) =>
    btn.addEventListener("click", launchInscriptionModal)
  );
  // Bouton fermeture
  if (closeBtn) closeBtn.addEventListener("click", closeFormModal);

  // Fermer via Échap
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeFormModal();
  });
});
