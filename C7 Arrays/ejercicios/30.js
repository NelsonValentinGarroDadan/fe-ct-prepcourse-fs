function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let comparador;
  for(let i = 0; i < numeros.length; i++){
    comparador = numeros.shift();
    if(numeros.includes(comparador)) return comparador;
    numeros.push(comparador);
  }
  return "No se encontraron numeros repetidos";
}
module.exports = encontrarElementoRepetido;