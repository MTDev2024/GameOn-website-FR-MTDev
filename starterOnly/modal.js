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
    const firstnameValue = firstnameInput.value.trim(); // trim enlève les espaces

    if (firstnameValue === "") {
        console.log("Le champ prénom est vide");
  } else if (firstnameValue.length < 2) {
        console.log("Le prénom doit contenir au moins 2 caractères");
  } else {
        console.log("Le champ prénom est valide :", firstnameValue);
  }


    // Nom
    const lastnameInput = document.getElementById('lastname');
    const lastnameValue = lastnameInput.value.trim();
    
    if (lastnameValue === "") {
        console.log("Le champ nom est vide");
    } else if (lastnameValue.length < 2) {
        console.log("Le nom doit contenir au moins 2 caractères");
    } else {
        console.log("Le champ nom est valide :", lastnameValue);
  }

    
    // Email
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        console.log("Le champ email est vide");
        formIsValid = false;
    } else if (!emailInput.checkValidity()) {
        console.log("Le format de l'email est invalide");
        formIsValid = false;
    } else {
        console.log("Le champ email est valide :", emailValue);
    }

    // Date de naissance
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValue = birthdateInput.value.trim();

    if (birthdateValue === "") {
        console.log("Le champ date de naissance est vide");
        formIsValid = false;
    } else if (!birthdateInput.checkValidity()) {
        console.log("Le format de la date de naissance est invalide");
        formIsValid = false;
    } else {
        console.log("Le champ date de naissance est valide :", birthdateValue);
    }


    // Nombre de tournois
    const quantityInput = document.getElementById("quantity");
    const quantityValue = quantityInput.value.trim();

    if (quantityValue === "") {
      console.log("Le champ est vide");
      formIsValid = false;
    } else if (!quantityInput.checkValidity()) {
      console.log("Le nombre est invalide");
      formIsValid = false;
    } else { 
      console.log("Le champ quantité est valide :", quantityValue);
    }


    // Lieux
    function getSelectedLocation() {
    const inputs = document.querySelectorAll('input[type="radio"][name="location"]');
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
    



    // RESULTAT FINAL 
  if (formIsValid) {
        console.log("Formulaire complet et valide !");
        
  } else {
        console.log("Le formulaire comporte des erreurs ou n'est pas complet.");
  }



});


for (let i=0; i < locationInputs.lengt; i++) {
  if(locationInputs[i].checked) {
    console.log(locationInputs[i].value)
  }
}