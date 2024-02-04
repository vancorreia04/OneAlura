let gerarNumeroAleatorio

function exibirTextoNaTela(tag){
    let campo = document.querySelector(tag);
    campo.inerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    console.log('O botão foi clicado !');
}
function gerarNumeroAleatorio(){
   return parseInt (Math.random()*10 +1);
}