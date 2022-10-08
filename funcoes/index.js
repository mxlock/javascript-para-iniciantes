// Crie uma função para verificar se um valor é Truthy
function dado(valor) {
  return (!!valor);
}

console.log(dado('eu'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(l1, l2, l3, l4 ) {
  return l1 + l2 + l3 + l4;
}

console.log(perimetroQuadrado(10 ,10 ,10 ,10));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}

console.log(nomeCompleto('Thiago', 'Ferreira'));

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if ((numero % 2 ) == 0 ) {
   return 'O número é par.';
  } else {
    return 'O número é ímpar';
  }
}

console.log(numeroPar(9));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(tipoDeDado) {
  return typeof(tipoDeDado);
}

console.log(tipoDado(12.75));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll' , function() {
  console.log('Thiago Ferreira');
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados, jaVisitei) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar e já visitei: ${jaVisitei} países. `;
  }

  console.log(precisoVisitar(20 , 20));

