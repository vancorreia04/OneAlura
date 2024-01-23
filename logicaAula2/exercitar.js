//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas//
console.log('Boas vindas');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador //
let nome = 'Vanderleia';
console.log(`Olá, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".//
let nomeDois = 'Vanderleia';
alert(`Olá, ${nome}!`);
 
//Utilize o prompt e faça a seguinte pergunta: Qual  a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador / /

let linguagemPreferida = prompt('Qual a linguagen de programação você mais gosta?');
console.log(linguagemPreferida);

// rie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.//

let valorUm = 45;
let valorDois = 50;
let resultado = valorUm + valorDois;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
//
let valor1 = 20;
let valaor2 = 30;
let resultadoDois = valor1 - valor2;
console.log (`A diferença entre ${valor1} e $(valor2) é igual a ${resultadoDois}` );

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. //
let idade = promp('Digite a idade');
if (idade > 17){
    console.log(`Você é maior de idade.`);
}else{
    console.log(`Você é menor de idade.`);

}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem //

var numero = parseFloat(prompt("Digite un número."));

if(numero > 0){
    console.log("O número é positivo.");

}else if(numero < 0 ){
    console.log("O número é negativo.");
}else {
    console.log("O número é zero.");
}
// Use um loop while para imprimir os números de 1 a 10 no console.//

let numeroDeUmADez = 1;
while(numeroDeUmADez <= 10){
    console.log(numeroDeUmADez);
    numeroDeUmADez++;
}