function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  let propEliminada = objeto[propiedad];
  delete objeto[propiedad];
  return propEliminada;
}

module.exports = eliminarPropiedad;
