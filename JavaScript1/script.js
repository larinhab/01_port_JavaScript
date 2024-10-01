/* Encontre a solução ao problema:

Pergunte o nome do usuário e escreva a mensagem: "Olá, [nome do usuári]"


let nome = prompt("Qual seu nome?")
alert("Olá, " + nome + " vamos calcular?" )

/* 

Solicite 2 números, faça a soma deles
e apresente o resultado final ao usúario 

 

let result = Number(numberOne) + Number(numberTwo)

alert("Sua soma deu: " + result)

alert("Finalizar")
*/
/* 

Capturar 2 números e fazer operações matemáticas 
de soma, subtração, multiplicação, divisão e resto da divisão.

E para cada operação mostrar um alerta com o resultado



let numberOne = prompt("Digite um número: ")
let numberTwo = prompt("Digite um segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert("Sua soma é: " + sum)
alert("A subtração é: " + sub)
alert("A multiplicação é: " + multi)
alert("A divisão é: " + div)
alert("O resto da divisão é: " + restDiv)

*/

/* 

Solicitar o nome do aluno e as 3 notas
do bimestre calcuar a média daquele aluno

Se o aluno passou, parabéns

Se não passou, recuperação

Em ambos os casos mostre uma mensagem do nome do aluno e a média.


let studantName = prompt("Qual seu nome?")

alert("Olá " + studantName)

let n1 = prompt("Digite suas notas, prova 1:")
let n2 = prompt("Digite suas notas, prova 2:")
let n3 = prompt("Digite suas notas, prova 3:")
const mediaGeral = (Number(n1) + Number(n2) + Number(n3)) / 3
const mediaBoa = mediaGeral > 7


alert("Sua média é: " + mediaGeral.toFixed(1))

if(mediaBoa) {
   alert("Parabéns está aprovado") 
} else {
    alert("Está reprovado")
}

/* Capture 10 itens para compor a lista de um supermercado.

Apos capturar os 10 itens, imprima-os por vírgula. 

let items = []

for(let item = 0; item < 10 ; item++) {
    let itemName = prompt("Digite o item" + (item + 1))

     items[item] = itemName 
}

alert(items)

/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

/*1
let result = prompt("Adivinhe o número que estou pensando, entre 1 e 10:")
const random = Math.round(Math.random() * 10)

let xAttempts = 1;


while(Number(result) != random){
    result = prompt("Erro tente novamente")
    xAttempts++
}

alert(`Parabéns você acertou em ${xAttempts} tentativa`)


if(random === result === match) {
    alert("Parabéns, você acertou!")
}else{
    alert("Número errado :(")
}


const match = Number(result) == random
console.log(result, random, match)

RESPOSTA CERTA 
__________________________________________________________________________________
let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)

/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.


Quais os dados de entrada? Número digitado, itens da lista
Quais as variáveis? Opções digitadas, lista de itens
Qual o caminho ideal? 1,2,3
Qual(is) o(s) caminho(s) alternativo(s)? SE não houver item
Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
Qual é a saída, ou quais os dados de saída, esperada? (outputs)
*/

let option;
let items = []

while(option != 3){

    option = Number(prompt(
    `Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))



    if(option == 1) {
        let item = prompt(`Digite o nome do item`)
        items.push(item)
    }
    
    else if(option == 2) {
        if(items.length == 0){
            alert("Não existem itens cadastrados")
        }else {
        alert(items)   
        }
    } else {
    alert("Tchau")
    }
}

switch(option){
    case 1:
        let item = prompt(`Digite o nome do item`)
        items.push(item)
        break;
    case 2:
        if(items.length == 0){
            alert("Não existem itens cadastrados")
        }else {
        alert(items)   
        }
    case 3:
        alert("Tchau")
        break;
        default:
            alert("opção invalida")
}

/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes

  const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)
*/

const patients = [
    {
        name: 'Luiz',
        age: 54,
        weight: 100,
        height: 190,
    },
    {
        name: 'Ana',
        age: 17,
        weight: 54,
        height: 160,
    },
    {
        name: 'Maria',
        age: 75,
        weight: 78,
        height: 155,
    },
]
 
let patientsNames = []

for(let patient of patients) {
    patientsNames.push(patient.name)
  }
  

  /* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

function IMC (weight, height){
    return weight / ((height/100 ) ** 2).toFixed(2)
}

const printIMC = (patient) => {
    return `
    Paciente ${patient.name} possui o IMC de: 
    ${IMC(patient.weight, patient.weight)}
    `
}

for(let patient of patients) {
    let imcMessage = printIMC(patient)
    alert(imcMessage)
}

