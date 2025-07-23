function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
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

// Validation formulaire
const form = document.getElementById("form");

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  // Empecher le rechargement de la page
  event.preventDefault();
  let formIsValid = true;

  // Vérification formulaire

  // Prénom
  const firstnameInput = document.getElementById("firstname");
  const firstnameError = document.getElementById("firstname-error");
  const firstnameValue = firstnameInput.value.trim();

  if (firstnameValue === "") {
    firstnameError.textContent = "Veuillez entrer votre prénom.";
    formIsValid = false;
  } else if (firstnameValue.length < 2) {
    firstnameError.textContent =
      "Le prénom doit contenir au moins 2 caractères.";
    formIsValid = false;
  } else {
    firstnameError.textContent = ""; // pas d'erreur
  }

  // Nom
  const lastnameInput = document.getElementById("lastname");
  const lastnameError = document.getElementById("lastname-error");
  const lastnameValue = lastnameInput.value.trim();

  if (lastnameValue === "") {
    lastnameError.textContent = "Veuillez entrer votre nom.";
    formIsValid = false;
  } else if (lastnameValue.length < 2) {
    lastnameError.textContent = "Le nom doit contenir au moins 2 caractères.";
    formIsValid = false;
  } else {
    lastnameError.textContent = "";
  }

  // Email
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    emailError.textContent = "Veuillez entrer votre adresse email.";
    formIsValid = false;
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = "Le format de l'adresse email est invalide.";
    formIsValid = false;
  } else {
    emailError.textContent = "";
  }

  // Date de naissance
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdate-error");
  const birthdateValue = birthdateInput.value.trim();

  if (birthdateValue === "") {
    birthdateError.textContent = "Veuillez indiquer une date de naissance";
    formIsValid = false;
  } else if (!birthdateInput.checkValidity()) {
    birthdateError.textContent =
      "Le format de la date de naissance est invalide";
    formIsValid = false;
  } else {

    // Vérification que la date n'est pas future
    const today = new Date();
    const enteredDate = new Date(birthdateValue);

    // Ignorer l'heure et comparer uniquement la date
    today.setHours(0, 0, 0, 0);

    // Comparer la date saisie avec la date du jour
    if (enteredDate > today) {
      birthdateError.textContent =
        "La date de naissance ne peut pas être dans le futur.";
      formIsValid = false;
    } else {
      birthdateError.textContent = "";
    }
  }

  // Nombre de tournois
  const quantityInput = document.getElementById("quantity");
  const quantityError = document.getElementById("quantity-error");
  const quantityValue = quantityInput.value.trim();

  if (quantityValue === "") {
    quantityError.textContent = "Veuillez entrer une valeur";
    formIsValid = false;
  } else if (!quantityInput.checkValidity()) {
    quantityError.textContent = "La valeur doit être comprise entre 0 et 99";
    formIsValid = false;
  } else {
    quantityError.textContent = "";
  }

  // Lieux
  function getSelectedLocation() {
    const inputs = document.querySelectorAll(
      'input[type="radio"][name="location"]'
    );
    for (const input of inputs) {
      if (input.checked) {
        return input.value.trim(); // La boucle s'arrête quand on trouve l'élément
      }
    }
    return ""; // Aucun lieu sélectionné
  }

  const selectedLocation = getSelectedLocation();

  if (selectedLocation === "") {
    console.log("Aucun tournoi sélectionné");
  } else {
    console.log("Tournoi sélectionné :", selectedLocation);
  }

  // Consentements
  const termsConsent = document.getElementById("terms-consent");
  console.log(termsConsent.checked);

  const termsError = document.getElementById("terms-error");

  if (!termsConsent.checked) {
    termsError.innerText = "Cette case est obligatoire";
  } else {
    termsError.innerText = "";
  }

  // RESULTAT FINAL
  if (formIsValid) {
    console.log("Formulaire complet et valide !");
  } else {
    console.log("Le formulaire comporte des erreurs ou n'est pas complet.");
  }
});
