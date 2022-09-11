console.log("Programa iniciado...rodando");
function Converter(n) {
  var a = document.getElementById("valor");
  switch (n) {
    case 1:
      var valor = a.value;
      break;
    case 2:
      var valor = a.value / 50;
      break;
    case 3:
      var valor = a.value / 4;
      break;
    case 4:
      var valor = a.value / 10;
      break;
  }

  var valorEmBananas = parseFloat(valor * 50);
  var valorEmRupees = parseFloat(valor);
  var valorEmMoedas = parseFloat(valor * 4);
  var valorEmAneis = parseFloat(valor * 10);
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
  elementoValorConvertidoC.innerHTML = " O valor em moedas é: " + valorEmMoedas;
  elementoValorConvertidoR.innerHTML = "O valor em anéis é: " + valorEmAneis;
  console.log("clicou");
}
