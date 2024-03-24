function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arrayA = arrayOfStrings.filter((elem)=> elem.at(0) === "a");
   return arrayA;
}
module.exports = filter;
