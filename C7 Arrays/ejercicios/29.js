function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length < 1) return null;
  let resultado = [];
  for(let i= 1; i < numeros.length; i++){
    if(numeros[i-1] !== numeros[i]-1) resultado.push(numeros[i]-1);
  }
  if(resultado.length > 0){
    return resultado;
  }else{
    return null;
  }
}
module.exports = encontrarNumeroFaltante;