function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let arrayOrdenado = array.toSorted((a, b) => a - b);
  return array.indexOf(arrayOrdenado[arrayOrdenado.length-1]);
}
module.exports = encontrarIndiceMayor;
