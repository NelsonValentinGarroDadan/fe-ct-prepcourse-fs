function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let numAleatorio;
   do{
      numAleatorio = Math.round(Math.random() * 10);
      if(array[numAleatorio]) return array[numAleatorio];
   }while(numAleatorio);
   
}
module.exports = obtenerElementoAleatorio;
