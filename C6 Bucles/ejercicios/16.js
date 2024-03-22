function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  let respuesta;
  switch(idioma){
    case "aleman": respuesta="Guten Tag!"
                  break;
    case "mandarin": respuesta = "Ni Hao!";
                  break;
    case "ingles" : respuesta = "Hello!";
                  break;
    default: respuesta = "Hola!"
  }
  return respuesta;
}
module.exports = saludo;
