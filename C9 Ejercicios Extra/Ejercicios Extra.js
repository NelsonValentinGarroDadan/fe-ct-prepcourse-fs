/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let resultado =[];
  for(obj in objeto){
    resultado.push([obj,objeto[obj]]);
  }
  return resultado;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let resultado = {};
  for(let i = 0; i < string.length; i++){
    if(resultado.hasOwnProperty(string.at(i))){
      resultado[string.at(i)]++;
    }else{
      resultado[string.at(i)] = 1;
    }
  }
  return resultado;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayusculas = "";
  let minusculas = "";
  for(let i = 0; i < string.length; i++){
    if(string.at(i) === string.at(i).toUpperCase()){
      mayusculas += string.at(i);
    }else{
      minusculas += string.at(i);
    }
  }
  return mayusculas+minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arrayfrase = frase.split(' ');
  let resultado = "";
  arrayfrase.forEach(palabra => {
    for(let i=palabra.length-1; i>-1; i--){
      resultado+=palabra.at(i);
    }
    resultado+=" ";
  });
  return resultado;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numStr = numero+"";
  for(let i = 0; i < numStr.length; i++){
    if(numStr.at(i) !== numStr.at((numStr.length-1)-i)) return "No es capicua"
  }
  return "Es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  return string.replace('a','').replace('b','').replace('c','');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let resultado = arrayOfStrings.toSorted((a,b)=>{
    if(a.length < b.length) return -1;
    if(a.length > b.length) return 1;
    return 0;
  });
  return resultado;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let resultado = [];
  array1.forEach((elemt)=>{ 
    if(array2.includes(elemt)) resultado.push(elemt);
  })
  return resultado;
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
