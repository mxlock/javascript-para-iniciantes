var nome = 'Thiago';


var botao = document.querySelector('.btn');

botao.addEventListener('click' , function () {
});

// nomeie 3 propriedades ou métodos de strings
nome.replace('Thi', 'ago');
nome.charAt(4);
nome.toLocaleLowerCase();

// nomeie 5 propriedades ou métodos de elementos do DOM.
var id = document.getElementById('btn');
var nomeClasse = document.getElementsByClassName('.btn');
var nomeDaTag = document.getElementsByTagName('a');
var query1 = document.querySelector('#btn');
var query2 = document.querySelectorAll('.btn');


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
const texto = document.querySelector('.texto');

btn.addEventListener('click', function (e) {
    navigator.clipboard.writeText(texto.innerHTML);
    
    alert('Texto copiado.');
});