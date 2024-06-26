function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let num = numero;
  while(num > 1){
    if( num % 2 !== 0) return false;
    num = num / 2;
  }

  return num === 1;
}

module.exports = esPotenciaDeDos;
