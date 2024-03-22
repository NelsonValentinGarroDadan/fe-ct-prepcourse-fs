function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   for (let i = 0; i < string.length / 2; i++) {
      if (string[i] !== string[string.length - 1 - i]) return false;
   }
   return true
}
module.exports = esPalindromo;
