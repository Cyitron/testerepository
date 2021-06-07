console.log('Bem vindo!')

// variaveis

//let idade = 5;
// printar o valor na tela
//console.log(idade);
// camelCase = let nomeCompleto (palavras separadas)
// js é Case sensitive

// valor absoluto/constante
const valor = 20;

// tipos primitivos
//let nome = 'Gabriel'; //string literal
//let idade = 25; //number literal
//let estaAprovado = true; //boolean
//let sobrenome = undefined; //undefined
//let corSelecionado = null; // redefinir um valor

// tipos de referencia/objetos
let pessoa = {
    nome:'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza'
};
console.log(pessoa)

// Arrays
let familia = [25,'john',60,12,true];
console.log(familia);
console.log(familia[2]);
// Array tb é um objeto, então ele está submetido a todas as ferramentas de um
console.log(familia.length);

// functions
let corSite = "azul";
function resetaCor(){
    corSite = "";
};
console.log(corSite);
resetaCor();
console.log(corSite);

let corSite2 = "preto";
function resetaCor2(cor){
    corSite2 = cor;
};

console.log(corSite2);
resetaCor2("vermelho");
console.log(corSite2)

let corSoma = "branco";
function resetaCor3(cor, tonalidade){
    corSoma = cor + ' ' + tonalidade;
};

console.log(corSoma);
resetaCor3("verde","claro");
console.log(corSoma);

//função que faz uma tarefa mas não devolve nada
function dizerNome(){
    console.log('Jhonatan');
};

dizerNome();

// função que faz uma operação e retorna algo
function multiplicaPorDois(valor){
    return valor*2;
};

let resultado = multiplicaPorDois(5);
console.log(resultado);

// Operadores aritméticos de JS == C++

//Operadores de igualdade
// Igualdade restrita
console.log(1 === 1);
// Igualdade solta
console.log('1' == 1);

// Operador Ternário
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Operador lógico AND (&&)
// Operador lógico OR (||)
// Operador lógico NOT (!) ex: !infoUser

// Trocando o valor de variaveis (simples)

let a = '1';
let b = '2';
let c = a;
a = b;
b = c;

// If and Else
// Ex: (mensagem de acordo com horário)
let hora = 13;

if (hora > 6 && hora < 12){
    console.log("bom dia");
}

else if (hora > 12 && hora < 18){
    console.log("Boa tarde");
}

else { // quando nenhum outro if for atendido, executa esse
    console.log|("Boa noite");
}

// Switch and Case
// Ex:
let permissao = 'gerente';

switch (permissao){
    case 'comum':
        console.log('usuario comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;

    case 'diretor':
        console.log('usuario diretor');
        break;

    default:
        console.log('usuario nao conhecido');
}

// Laços:
//For
for(let i = 0; i <= 5; i++){
    if(i % 2 !== 0){ // imprime só os valors impares
        console.log(i);
    }
}

//While
let id = 5;
while (id >= 1){
    console.log(id);
    id--;
}

//Do...While
let i = 0;
do{
    console.log('Digitando', i);
    i++;
} while (i < 10)
//a diferença do (Do/while) para o (While) é que o primeiro executa uma vez e depois verifica a condiçao, o segundo verifica a condiçao antes de executar

//For...In
//ele é ideal para interar propriedades de um array
const personagem = {
    nome: 'John',
    idade: 25
};

for(let key in personagem){
    console.log(key, personagem.nome, personagem.idade);
} //não é da melhor forma!

const pintura = ['vermelho','Azul', 'Verde'];
for(let indice in pintura){
    console.log(indice, pintura[indice]);
}

//For...Of
//se voce precisar interar sobre os ITENS de um array use esse laço!
for(let cor of pintura){
    console.log(cor);
}

// Mini-projeto: Maximo entre dois valores

let valorMaior = max(20,30);
console.log(valorMaior);

function max(numero1, numero2){
    if(numero1 > numero2)
        return numero1;
    return numero2;
// ou
    return numero1 > numero2 ? numero1 : numero2;
}

//Mini-projeto: funcao Fizzbuzz
// divisivel por 3 retorna Fizz
// divisivel por 5 retorna buzz
// divisivel por ambos retorna fizzbuzz
// nao divisivel retorna a entrada
// nao é um numero retorna 'não é um numero'

const fizzbuzzentrada =  fizzBuzz(15);
console.log(fizzbuzzentrada);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um número';
    if(entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}

// Mini-projeto: medidor de velocidade

verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPontos = 5;
    const velocidadeLimite = 130;
        if (velocidade <= velocidadeMaxima)
        console.log('Limpo');
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/ KmPontos);
        if(velocidade >= velocidadeLimite)
            console.log('Carteira suspensa');
        else console.log('Pontos', pontos);
    }
}

// Mini-projeto: par ou impar
parOuImpar(5);
function parOuImpar(limite){
    for(let altern = 0; altern <= limite; altern++){
        if (altern % 2 === 0)
            console.log(altern, 'Par');
        else
            console.log(altern,'Impar');
    }
}

// Mini-projeto: encontrar a string!
const linha = {
    dado1 : 'one',
    dado2 :  1000,
    dado3 :  'three',
    dado4 :  true
}

exibirPropriedades(linha);
function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] === 'string') //se for apenas (prop) pega todo o array
            console.log(prop, obj[prop]);
}

// Mini-projeto: soma de multiplos de 3 e 5
somarTudo(10)
function somarTudo(teto) {
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for(ponteiro = 0; ponteiro <= teto; ponteiro++){
        if(ponteiro % 3 === 0)
            multiploDe3 += ponteiro;
        if(ponteiro % 5 === 0)
            multiploDe5 += ponteiro;
    }
    console.log(multiploDe3 + multiploDe5);
}

// Mini-projeto: Numeros primos
exibirPrimos(15);

function exibirPrimos(topo){
    for(let numbers = 2; numbers <= topo; numbers++){
        if(numeroPrimo(numbers)) console.log(numbers);
    }
}

function numeroPrimo(numbers) {
    for(let divisors = 2; divisors < numbers; divisors++){
        if(numbers % divisors === 0){
            return false;
        }
    }
    return true;
}

// Factory Functions/Funções de Fábrica
function criarCelular (marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação");
        }
    }
}

const celular1 = criarCelular('ASUS',5.5,5000);
console.log(celular1);

// Constructor Function/ Função de Consultor
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    // "this" serve unicamente para referenciar o objeto que estamos apontando
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação...");
    }
}

const celular2 = new Celular ('ACER',7.0, 5000);
console.log(celular2);

// Clonando Objetos
const novoObjeto = Object.assign({}, celular2);

// uma forma mais direta de clonar é o spread...
const objeto2 = {...celular2};

// Template Literal:
// Com os caracteres `` voce pode escrever como quiser, com qualquer simbolo quiser sem a mensagem dar erro!

const meuNome = 'Gabriel';
const mensagemLimpa = 
`Ola a todos, meu nome é ${meuNome}. "isso é um teste",
Tudo bem?`;

// Date
const data1 = new Date(); // caso não coloque nenhum parametro, o console irá dar a hora e data atual!
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019,03,06,9,25); //Ele vai dar o mes 4 e não o mes 3, porque Janeiro é o mes 0!

// Pegando inputs do usuario
let CorFavorita = prompt('Qual a sua cor favorita?');