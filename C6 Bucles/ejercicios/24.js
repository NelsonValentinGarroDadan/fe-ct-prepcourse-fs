function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let respuesta = "";
   for(i=texto.length-1; i>=0; i--){
      respuesta += texto[i];
   }
   return respuesta;
}
module.exports = invertirTexto;
