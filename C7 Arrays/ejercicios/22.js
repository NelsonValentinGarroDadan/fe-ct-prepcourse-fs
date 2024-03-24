function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let arrayResultado=[];
  for(let i = 0; i < 11; i++){
    arrayResultado.push(i*6);
  }
  return arrayResultado;
}
module.exports = tablaDelSeis;
