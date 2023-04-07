export const validation = (input) => {

    const inputType = input.dataset.type;
    let errorMessage = "";

    if(!input.validity.valid){
        typeError.forEach( error => {
            if(input.validity[error]){
                errorMessage = errorMessages[inputType][error];
            }
        });
    }
     
    input.setCustomValidity(errorMessage);
}

const typeError = [
    "valueMissing",
    "tooLong",
    "typeMismatch",
];

const errorMessages = {
    "name": {
        "valueMissing":"Este campo no puede estar vacio",
        "tooLong": "No puedes escribir mas de 50 caracteres",
    },
    "email": {
        "valueMissing":"Este campo no puede estar vacio",
        "typeMismatch": "Este campo debe contener un @ seguido de un dominio, ej: error@gmail.com",
    },
    "subject": {
        "valueMissing":"Este campo no puede estar vacio",
        "tooLong": "No puedes escribir mas de 50 caracteres",
    },
    "message": {
        "valueMissing":"Este campo no puede estar vacio",
        "tooLong": "No puedes escribir mas de 300 caracteres",
    },
};