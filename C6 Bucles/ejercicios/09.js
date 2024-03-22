function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  let estadoUsuario;
  switch(status){
    case 1 : 
            estadoUsuario = "Online";
            break;
    case 2 : 
            estadoUsuario = "Away";
            break;
    default:
            estadoUsuario = "Offline";
  };
  return estadoUsuario;
}

module.exports = conection;
