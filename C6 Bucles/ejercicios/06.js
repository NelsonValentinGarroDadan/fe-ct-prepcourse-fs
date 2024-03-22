function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let numero = num;
  let contador = 1;
  while(numero > 1){
    contador++;
    numero = Math.round(numero / 10);
  }
  return contador === 3;
}

module.exports = tieneTresDigitos;
