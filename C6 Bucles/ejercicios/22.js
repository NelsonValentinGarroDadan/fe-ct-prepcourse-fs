function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let masLargo;
   let respuesta = "";
   if(str2.length < str1.length && str3.length < str1.length){
      masLargo = str1;
   }else if(str1.length < str2.length && str3.length < str2.length){
      masLargo = str2;
   }else{
      masLargo = str3;
   }
   for(i = 0; i <= masLargo.length; i++){
      if(str1[i]) respuesta += str1[i];
      if(str2[i]) respuesta += str2[i];
      if(str3[i]) respuesta += str3[i];
   }
   return respuesta;
}
module.exports = combine;
