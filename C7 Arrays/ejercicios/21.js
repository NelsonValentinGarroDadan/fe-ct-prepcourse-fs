function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesPerdidos = array.filter((mes)=> mes === "Enero" || mes === "Marzo" || mes === "Noviembre");
  if(!mesesPerdidos.includes("Enero") || !mesesPerdidos.includes("Marzo") || !mesesPerdidos.includes("Noviembre")) return "No se encontraron los meses perdidos";
  return mesesPerdidos;
}
module.exports = mesesDelAño;
