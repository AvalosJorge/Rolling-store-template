import { getUsers } from '../services/getUsers.js';

/**
 *
 * @param {email} email  Recibe un email
 * @param {password} password Recibe una contraseña
 * @returns {bool} Devuelvue un booleano si las credenciales del usuario estan registradas.
 */

export const validateLoginUser = ({ email, password }) => {
  const users = getUsers();

  const usuarioEncontrado = users.find(
    (user) => user.email === email && user.password === password
  );

  console.log(usuarioEncontrado);
  return !!usuarioEncontrado;
};
