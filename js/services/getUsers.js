/**
 *
 * @returns Devuelve el arreglo de todos los usuarios almacenados en localStorage bajo la key "users"
 */

export const getUsers = () => {
  const usersString = localStorage.getItem('users');

  if (usersString) {
    try {
      const users = JSON.parse(usersString);
      console.log(users);
      return users;
    } catch (error) {
      console.error('Error al obtener los datos de usuarios:', error.message);
      return [];
    }
  } else {
    return [];
  }
};
