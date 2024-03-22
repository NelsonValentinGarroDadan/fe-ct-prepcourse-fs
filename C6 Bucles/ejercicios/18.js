function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 0;
  let mayor,menor;
  if(a < b){
    mayor = b+1;
    menor = a;
  }else{
    mayor = a+1;
    menor = b;
  }
  for(i=menor; i < mayor ; i++){
    if(producto == 0){
      producto = i;
    }else{
      producto *= i;
    }
  }
  return producto;
}
module.exports = productoEntreNúmeros;