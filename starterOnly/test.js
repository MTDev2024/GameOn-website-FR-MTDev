// ========== MENU RESPONSIVE ==========
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ========== MODALE ==========
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
closeBtn.addEventListener("click", closeModal);

function launchModal() {
  modalbg.classList.add("show");
}

function closeModal() {
  modalbg.classList.remove("show");
}

// ========== VALIDATION FORMULAIRE ==========

// Déclaration
const form = document.getElementById("form");

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  // Empêcher le rechargement de la page
  event.preventDefault();

  // Fonction réutilisable de validation des champs de type texte 
  function validateTextInput(inputId, errorId, fieldName, minLength = 2) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    const value = input.value.trim();

    // Si le champ est vide
    if (value === "") {
      error.textContent = `Veuillez entrer votre ${fieldName.toLowerCase()}.`;
      return false;
    }
    // Si le champ est trop court
    else if (value.length < minLength) {
      error.textContent = `${fieldName} doit contenir au moins ${minLength} caractères.`;
      return false;
    }
    // Si le champ est ok
    else {
      error.textContent = "";
      return true;
    }
  }

  // Validation des champs
  const isFirstnameValid = validateTextInput("firstname", "firstname-error", "Prénom");
  const isLastnameValid = validateTextInput("lastname", "lastname-error", "Nom");

  // Si les deux champs sont valides, on peut continuer
  if (isFirstnameValid && isLastnameValid) {
    console.log("Nom et prénom valides");
      }
});
