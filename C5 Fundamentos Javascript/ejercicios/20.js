function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if(letra.length !== 1) return "Dato incorrecto";
  let vocales = ["a","e","i","o","u"];
  let respuesta = false;
  vocales.map(l => {
      respuesta = respuesta || l===letra;
  })
  if(respuesta){return "Es Vocal"}else{return "Dato incorrecto"}
}
module.exports = esVocal;
