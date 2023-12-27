import Navbar from './components/Navbar.js';
import { validateLoginUser } from './validators/validateLoginUser.js';
import { showPassword } from './utils/showPassword.js';
import { setLoggedUser } from './services/setLoggedUser.js';
import { redirectIndex } from './utils/redirectIndex.js';
import { getUsers } from './services/getUsers.js';

document.addEventListener('DOMContentLoaded', () => {
  Navbar();
});

const showPasswordButton = document.getElementById('showPasswordBtn');

const usuario = {};

showPasswordButton.addEventListener('click', (e) => {
  showPassword(e);
});

const loginForm = document.getElementById('loginForm');
const invalidLoginFeedback = document.getElementById('invalidLoginFeedback');

const userLoginFeedback = (bool) => {
  invalidLoginFeedback.classList.add('hidden');

  if (bool) {
    return invalidLoginFeedback.classList.add('hidden');
  }

  invalidLoginFeedback.classList.remove('hidden');
  return;
};

/**
 *
 * @param {object} e Evento de submit del formulario de login
 * @returns Debe mostrar el feedback dependiendo de la validación del login, settearlo y redirigir al usuario a la página principal si este fue correcto.
 */

const userLogin = (e) => {
  e.preventDefault();

  const inputMail = document.querySelector('#loginEmailInput');
  const inputPassword = document.querySelector('#loginInputPassword');

  usuario.email = inputMail.value;
  usuario.password = inputPassword.value;

  if (validateLoginUser(usuario)) {
    return console.log('da true');
  }
  console.log('no da true');
};

loginForm.addEventListener('submit', userLogin);
// {email: "admin@admin.com", password: "admin83i", role: "admin",…}
