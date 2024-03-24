function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let arrayResultado = [];
  let acumulador = num;
  let i = 1;
  for(i; i < 11; i++){
    if(acumulador == i) break;
    acumulador += 2;
    arrayResultado.push(acumulador);
  }
  if(i !== 11) return "Se interrumpio la ejecucion";
  return arrayResultado;
}
module.exports = breakStatement;
