import { getUsers } from './getUsers.js';

/**
 *
 * @param {string} email Recibe un email
 * @returns Crea una key en el localStorage llamada "loggedUser" que va a almacenar el objeto del usuario logeado
 */

export const setLoggedUser = (email) => {
  const users = getUsers();

  const user = users.find((user) => user.email === email);

  if (user) {
    const userLogged = localStorage.setItem('loggedUser', JSON.stringify(user));
    return userLogged;
  }
};
