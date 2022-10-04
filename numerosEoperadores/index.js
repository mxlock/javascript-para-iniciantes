// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var dividindo = "Thiago" / 50;
console.log(dividindo);
var multiplicando = "Thiago" * 100;
console.log(multiplicando);
 
// Somar a string '200' com o número 50 e retornar 250
var somaString = parseInt('200') + 50;
console.log(somaString);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

var pesoPorDois = peso.slice(0, -2) / 2; // NaN (Not a Number) -> Resultado 40, utilizando medo de slice. 

console.log(peso);
console.log(pesoPorDois);
