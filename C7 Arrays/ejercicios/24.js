function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let arrayResultado = [];
  let acumulador = num;
  let i = 1;
  for(i; i < 11; i++){
    if(i === 5) continue;
    acumulador += 2;
    arrayResultado.push(acumulador);
  }
  return arrayResultado;
}
module.exports = continueStatement;
