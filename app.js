console.log("Ola mundo")
console.log(2 + 2)
console.log(2 * 2)
console.log(10 / 2)
console.log(10 - 2)
console.log(10 * 2)
console.log(30 + 1)
console.log(100 / 2)
console.log(35.7 * 3.8)
console.log(99 + 21 + 125)
console.log(32 - 3 / 4.4)
console.log(4 + 4 + 4 + 4 / 4)
console.log(127.75 + 53.82)
console.log(350 - 22.7)

/* comentário de varias linhas */

//comnetário de uma linha

/* variáveis*/

/* variável é um espaço resevardo na memória 
para armazenar um valor , 
-toda variável tem um nome e um tipo
  - a variável deve ter um nome significativo,exemplo:
  - uma variável que vai armazenar a infiemação idade pode ter o nome IDADE, 
  uma variável que vai armazenar o preço de venda de um produto pode ter o nome PRECOVENDA
  - a recomendação é que o nome da variável seja simples o javascript defirencia maiúsculas
  de minúsculas, isso significa que PrecoVenda é deferente de precovenda*/

//var nome
let nome = 'Daniel'
let idade = 40
let nota1 = 7.5
let fumante = false

console.log(nome)
console.log(idade, nota1, fumante)
console.log('sua nota é ' + nota1)

/* Tipo*/
console.log(typeof nome) //Daniel é string
console.log(typeof idade)// 40 é number
console.log(typeof nota1) // 7.5 é number
console.log(typeof fumante) // false é boolean

let veiculo = ['carro', 'moto', 'avião']
console.log(veiculo)
console.log(typeof veiculo)

let cliente = {
  nome: 'daniel',
  idade: 36
}

console.log(cliente)
console.log(typeof cliente)
let salvar = function () {

}
console.log(typeof salvar)

/* opereador relacionais */

console.log(10 > 3) //maior
console.log(5 < 3) // menor
console.log(15 >= 10) //maior ou igual
console.log(15 <= 10) // menor ou igual
console.log(10 == 10)// igual
console.log(10 != 10)//diferente

/* opereadores lógicos*/
console.log('==========')
console.log(10 > 3 && 10 > 5) // operador E(AND)- com operador E todos 
// as expressões devem ser verdadeiros para resultado ser verdadeiro

console.log(10 > 3 || 10 > 15 || 10 > 8)//operador (OR) - com OU apenas umas 
//expressão, precisa ser verdadeiro par o resiltado ser verdadeiro

console.log(!10 > 3)// operedor NÃO (NOT) - o operador NOT inverte o resultado da 
//expressão, se for verdadeiro ele inverte para falso e se for falso ele inverte para verdadeiro

//alert("ola mundo")

//document.write("<h3>olá Mundo</h3>")


function Rosa() {
  //inserir um valor em um elemento da página

  document.getElementById('titulo').
    innerHTML = 'Aula 02 js'
  document.getElementById('texto').
    innnerHTML = 'Vamos estudar intereção com DOM'

  document.body.style.backgroundColor = 'violet'
  document.body.style.color = 'white'

  document.getElementById('titulo').style.color = 'yellow'

  //pegar o valor de um elemento da página
  let titulo = document.getElementById('titulo').
    innerHTML
  console.log(titulo)
}
function Laranja() {
  document.body.style.backgroundColor = 'orangered'
  document.body.style.color = 'lightblue'
}
Laranja()
