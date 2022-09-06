function Converter() {
  var valorElemento = document.getElementById("distanciaKm");
  var distanciaKm = valorElemento.value;
  var valorEmKm = parseFloat(distanciaKm);
  var valorEmAnosLuz = distanciaKm * 9460800000000;
  console.log(valorEmAnosLuz);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "A distância aproximada em Anos Luz é de: " + valorEmAnosLuz;
  elementoValorConvertido.innerHTML = valorConvertido;
}