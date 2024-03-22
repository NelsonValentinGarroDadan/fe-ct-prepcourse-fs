function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 1;
  let respuesta = num;
  do{
    respuesta += 5;
    contador++;
  }while(contador <= 8);
  return respuesta;
}
module.exports = doWhile;