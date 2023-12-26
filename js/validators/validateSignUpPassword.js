import { passwordRegex } from "./passwordRegex.js"

/**
 * 
 * @param {password} password Recibe una contraseña
 * @returns {bool} Devuelve un booleano dependiendo si la contraseña es valida o no.
 */

export const validateSignUpPassword = (password) =>{
 const passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*])[A-Za-z\d@$!%*?&]{8,}$/;
 const validatepassword = passwordregex.test(password);
 return validatepassword;
};