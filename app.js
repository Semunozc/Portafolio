import { validation } from "./inputsValidations.js";

const inputs = document.querySelectorAll(".contact__input");

inputs.forEach(input => {
    
    input.addEventListener("blur", (event) => {

        validation(event.target);
    });
});

const emailInput = document.querySelector("[data-type = 'email']");

emailInput.addEventListener("blur", () => {
    if(emailInput.value != ""){
        emailInput.classList.add("semi-valid");
    }else{
        emailInput.classList.remove("semi-valid");
    }
});