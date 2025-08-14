const form = document.getElementById("form");

// Validation prénom
function validateFirstname() {
  const firstnameInput = document.getElementById("firstname");
  const firstnameError = document.getElementById("firstname-error");
  const value = firstnameInput.value.trim();

  if (value === "") {
    firstnameError.textContent = "Veuillez entrer votre prénom.";
    return false;
  }
  if (value.length < 2) {
    firstnameError.textContent =
      "Le prénom doit contenir au moins 2 caractères.";
    return false;
  }
  firstnameError.textContent = "";
  return true;
}

// Validation nom
function validateLastname() {
  const lastnameInput = document.getElementById("lastname");
  const lastnameError = document.getElementById("lastname-error");
  const value = lastnameInput.value.trim();

  if (value === "") {
    lastnameError.textContent = "Veuillez entrer votre nom.";
    return false;
  }
  if (value.length < 2) {
    lastnameError.textContent = "Le nom doit contenir au moins 2 caractères.";
    return false;
  }
  lastnameError.textContent = "";
  return true;
}

// Validation email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const value = emailInput.value.trim();

  // Regex stricte : accepte .fr, .com, .co.uk, etc.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,10})+$/;

  if (!emailRegex.test(value)) {
    emailError.textContent =
      "Veuillez entrer une adresse email valide (ex : nom@domaine.fr).";
    return false;
  }

  emailError.textContent = "";
  return true;
}

// Validation date de naissance
function validateBirthdate() {
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdate-error");
  const value = birthdateInput.value.trim();

  if (value === "") {
    birthdateError.textContent = "Veuillez indiquer une date de naissance.";
    return false;
  }
  if (!birthdateInput.checkValidity()) {
    birthdateError.textContent =
      "Le format de la date de naissance est invalide.";
    return false;
  }

  // Vérification que la date n'est pas dans le futur
  const today = new Date();
  const enteredDate = new Date(value);
  today.setHours(0, 0, 0, 0);

  if (enteredDate > today) {
    birthdateError.textContent =
      "La date de naissance ne peut pas être dans le futur.";
    return false;
  }

  birthdateError.textContent = "";
  return true;
}

// Validation quantité
function validateQuantity() {
  const quantityInput = document.getElementById("quantity");
  const quantityError = document.getElementById("quantity-error");
  const value = quantityInput.value.trim();

  if (value === "") {
    quantityError.textContent = "Veuillez entrer une valeur.";
    return false;
  }
  if (!quantityInput.checkValidity()) {
    quantityError.textContent = "La valeur doit être comprise entre 0 et 99.";
    return false;
  }
  quantityError.textContent = "";
  return true;
}

// Validation lieu sélectionné
function validateLocation() {
  const locationError = document.getElementById("location-error");
  const inputs = document.querySelectorAll(
    'input[type="radio"][name="location"]'
  );
  let selected = false;
  inputs.forEach((input) => {
    if (input.checked) selected = true;
  });
  if (!selected) {
    locationError.textContent = "Veuillez sélectionner un lieu de tournoi.";
    return false;
  }
  locationError.textContent = "";
  return true;
}

// Validation consentements
function validateTermsConsent() {
  const termsConsent = document.getElementById("terms-consent");
  const termsError = document.getElementById("terms-error");

  if (!termsConsent.checked) {
    termsError.textContent =
      "Vous devez avoir lu et accepté les conditions pour vous inscrire.";
    return false;
  }
  termsError.textContent = "";
  return true;
}

// Fonction globale de validation
function validate() {
  const validFirstname = validateFirstname();
  const validLastname = validateLastname();
  const validEmail = validateEmail();
  const validBirthdate = validateBirthdate();
  const validQuantity = validateQuantity();
  const validLocation = validateLocation();
  const validTerms = validateTermsConsent();

  return (
    validFirstname &&
    validLastname &&
    validEmail &&
    validBirthdate &&
    validQuantity &&
    validLocation &&
    validTerms
  );
}

// Gestion des événements en temps réel
document
  .getElementById("firstname")
  .addEventListener("input", validateFirstname);
document.getElementById("lastname").addEventListener("input", validateLastname);
document.getElementById("email").addEventListener("input", validateEmail);
document
  .getElementById("birthdate")
  .addEventListener("change", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);

// Validation des boutons radio "location"
document
  .querySelectorAll('input[type="radio"][name="location"]')
  .forEach((input) => {
    input.addEventListener("change", validateLocation);
  });

// Consentement : checkbox
document
  .getElementById("terms-consent")
  .addEventListener("change", validateTermsConsent);

// Soumission du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formIsValid = validate();

  const validMessage = document.getElementById("valid-message");

  if (formIsValid) {
    validMessage.classList.remove("form-error");
    validMessage.classList.add("form-success");
    validMessage.textContent = "Votre inscription a été validée, merci.";

    // Récupération des données
    const formData = {
      firstname: document.getElementById("firstname").value.trim(),
      lastname: document.getElementById("lastname").value.trim(),
      email: document.getElementById("email").value.trim(),
      birthdate: document.getElementById("birthdate").value.trim(),
      quantity: document.getElementById("quantity").value.trim(),
      location: (() => {
        const inputs = document.querySelectorAll(
          'input[type="radio"][name="location"]'
        );
        for (const input of inputs) {
          if (input.checked) return input.value.trim();
        }
        return "";
      })(),
      termsConsent: document.getElementById("terms-consent").checked,
      subscribeNewsletter: document.getElementById("events-consent").checked,
    };

    console.log("Données du formulaire :", formData);

    // Ici on peut utiliser un fetch ou un form.submit() si besoin
  } else {
    validMessage.classList.remove("form-success");
    validMessage.classList.add("form-error");
    validMessage.textContent = "";
    console.log("Le formulaire comporte des erreurs ou n'est pas complet.");
  }
});
