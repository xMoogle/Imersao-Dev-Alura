var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto)
    elementoResultado.innerHTML = "Parabéns! Você acertou!";
  else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 10";
  } else if (chute > numeroSecreto)
  {elementoResultado.innerHTML = "O número que você digitou é maior que o número secreto! Tente novamente!";}
  else elementoResultado.innerHTML = "O número que você digitou é maenor que o número secreto! Tente novamente!"
}