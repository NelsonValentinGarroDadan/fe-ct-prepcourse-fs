function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === 'string') array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array;
}
convertirStringAMayusculas(["hoal","chau",2,"sabadooo"])
module.exports = convertirStringAMayusculas;
