console.log("Programa iniciado...rodando");
function Converter1() {
  var a = document.getElementById("valor");
  var valor = a.value;
  var valorEmBananas = parseFloat(valor / 18859.43);
  var valorEmRupees = parseFloat(valor * 5);
  var valorEmMoedas = parseFloat(valor * 4);
  var valorEmAneis = parseFloat(valor * 4);
  var elementoValorEmRupees = document.getElementById("valorEmRupees");
  console.log(elementoValorEmRupees);
  var elementoValorConvertidoB = document.getElementById("valorConvertidoB");
  console.log(elementoValorConvertidoB);
  var elementoValorConvertidoC = document.getElementById("valorConvertidoC");
  console.log(elementoValorEmRupees);
  var elementoValorConvertidoR = document.getElementById("valorConvertidoR");
  console.log(elementoValorConvertidoB);
  elementoValorEmRupees.innerHTML = " O valor em rupees é: " + valorEmRupees;
  elementoValorConvertidoB.innerHTML =
    "O valor em Bananas é: " + valorEmBananas;
  elementoValorConvertidoC.innerHTML = " O valor em rupees é: " + valorEmMoedas;
  elementoValorConvertidoR.innerHTML = "O valor em Bananas é: " + valorEmAneis;
  console.log("clicou");
}