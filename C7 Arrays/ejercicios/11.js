function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arrayDuplicado = array.map(num =>{ return num*2});
  return arrayDuplicado;
}
duplicarElementos([1,2,3])
module.exports = duplicarElementos;
