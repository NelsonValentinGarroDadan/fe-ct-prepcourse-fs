function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let arrayMulti = array.map((element,index) => element*index);
  return arrayMulti;
}
module.exports = multiplicarElementosPorIndice;
