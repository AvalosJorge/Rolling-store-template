import Navbar from "./components/Navbar.js"; 
import { validateExistingEmail } from "./validators/validateExistingEmail.js";
import { validateSignUpPassword } from "./validators/validateSignUpPassword.js";
import { validateRepeatPassword } from "./validators/validateRepeatPassword.js";
import { validateEmail } from "./validators/validateEmail.js";
import { showPassword } from "./utils/showPassword.js";
import { redirectIndex } from "./utils/redirectIndex.js";
import { createUser } from "./services/createUser.js";
import { setLoggedUser } from "./services/setLoggedUser.js";

document.addEventListener("DOMContentLoaded" , ()=>{
 Navbar()
})

const showPasswordButton = document.getElementById("showPasswordBtn")

showPasswordButton.addEventListener("click", (e)=>{
    showPassword(e)
})

const signUpForm = document.getElementById("signUpForm")
const signUpFormEmailInput = document.getElementById("emailSignUpInput")
const signUpFormPasswordInput =  document.getElementById("emailSignUpPassword")
const signUpFormRepeatPassword = document.getElementById("repeatSignUpPassword")

signUpFormRepeatPassword.addEventListener('paste', e => e.preventDefault());

/**
 * 
 * @param {string} email Recibe un email
 * @returns {bool} Debe mostrar el feedback de email valido o invalido segun corresponda,devuelve un booleano
 */

const emailFeedback = (email) =>{
    const emailregex = /^[^/S@]+@[^/S@]+$/;
    const validacionemail = emailregex.test(email)
    if (validacionemail) {
        console.log("email correcto")
    } else {
        console.log("email incorrecto")
    }
    return invalidacionemail;
}
//ejemplo
const emailvalido = emailFeedback("usuario@gmail.com");
console.log("el correo es valido:",emailvalido)

/**
 * 
 * @param {string} password Recibe una contraseña.
 * @returns Debe mostrar el feedback de contraseña valida o invalida segun corresponda,devuelve un booleano.
 */

const passwordFeedback = (password) =>{
const passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*])[A-Za-z\d@$!%*?&]{8,}$/;
const validatepassword = passwordregex.test(password);
if (validatepassword) {
    console.log("password valido")
} else {
    console.log("password invalido")
}
return validatepassword;
};

// ejemplo
const contraseñavalida = passwordFeedback("contraseña123456");
console.log("contraseña valida", contraseñavalida)
/**
 * 
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword  Recibe otra contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida segun corresponda, devuelve un booleano.
 */

const repeatPasswordFeedback = (password,repeatPassword) =>{
 const passwordigual = password === repeatPassword
 if (passwordigual){ 
    console.log("contraseña valida");
 } else {
    console.log("contraseña invalida")
 }
 return passwordigual;
};

const showSuccesfulSignUpModal = () =>{
    const modal = new bootstrap.Modal(document.getElementById('succesfulSignupModal'))
    modal.show()
    setTimeout(redirectIndex, 3000)
}

/**
 * 
 * @param {object} e Recibe el evento de submit del formulario
 * @returns Si la información del formulario es valida, debe registrar al usuario, logearlo, mostrar el modal de registro exitoso y redirigirlo a la página principal. 
 */

const signUpSubmit = (e) =>{
    e.preventDefault();
    const username = document.getElementsByID("username").value;
    const password = document.getElementsByID("password").value;
    const repeatPassword = document.getElementsByID("repeatPassword").value;
    const formulariovalido = validacionformulario(username, password, repeatPassword);
    if (formulariovalido) {
        showSuccesfulSignUpModal();
        setTimeout(redirectIndex, 3000);
    }
};
signUpForm.addEventListener("submit", signUpSubmit)