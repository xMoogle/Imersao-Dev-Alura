console.log("Programa iniciado...rodando");
function Converter() {
  var a = document.getElementById("valor");
  var valor = a.value;
  var valorEmBitCoin = parseFloat(valor / 18859.43);
  var valorEmReal = parseFloat(valor * 5);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  console.log(elementoValorConvertido);
  var elementoValorEmBitCoin = document.getElementById("valorEmBitCoin");
  console.log(elementoValorEmBitCoin);
  elementoValorConvertido.innerHTML = "O valor em reais é: " + valorEmReal;
  elementoValorEmBitCoin.innerHTML = "O valor em BitCoin é: " + valorEmBitCoin;
  console.log("clicou");
  console.log(valorEmReal);
}