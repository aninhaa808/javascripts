// 1. Crie uma variável chamada `nome` e atribua seu nome a ela. Exiba o nome no console.

let nome= "Ana"
console.log(nome)

// 2. Crie uma constante chamada `PI` e atribua o valor 3.14. Exiba o valor no console.

const PI =3.14
console.log(PI)

// 3. Crie uma variável `idade`, atribua um valor e depois altere para um novo valor. Exiba ambos no console.

let idade = 16 
console.log (16, 20)
idade=20

// 4. Crie duas variáveis de string, `primeiroNome` e `sobrenome`, e exiba o nome completo concatenado.

let primeiroNome= "Ana"
let sobrenome="Carolina"
let resultado = primeiroNome + sobrenome
console.log(resultado)

/*
 +: "Ana " + "Carolina"
*/

// 5. Dada a string `mensagem = "Olá, mundo!"`, exiba a mensagem em letras maiúsculas.

let mensagem = "Olá, mundo!"
console.log(mensagem.toUpperCase())

// 6. Crie um array com os nomes de três frutas e exiba o segundo elemento do array.

let frutas =["abacaxi", "morango","uva verde"]
console.log(frutas[1])

// 7. Crie um array com três números e adicione um novo número no final. Exiba o array atualizado.
let numeros =[1, 2 ,3]
numeros.push(4)
console.log(numeros)

// 8. Crie duas variáveis, `a` e `b`, atribua valores numéricos a elas e exiba a soma.
let a = 6
let b = 12
console.log(a+b)

// 9. Calcule a média de três números armazenados em variáveis e exiba o resultado.
let numero1= 1
let numero2= 2
let numero3= 3
let média = (numero1 + numero2 + numero3)
console.log(média)

// 10. Crie uma variável `contador` inicializada em 0, incremente-a três vezes e exiba seu valor final.
let contador = 0
contador ++
contador = contador+1
contador = contador+1
console.log(contador)

// 11. Crie duas variáveis booleanas, `chuvendo` e `frio`, e use um operador lógico para verificar se deve levar um guarda-chuva.
let chuvendo = false
let frio = false
console.log(`devo levar guarda-chuva ${chuvendo} e devo levar casaco? ${frio}`)

// 12. Crie uma variável `idade` e use um operador lógico para verificar se a pessoa pode dirigir (idade >= 18).
let idade2= 19
console.log(`Essa pessoa já pode dirigir? ${idade >=18}`)

// 13. Crie duas variáveis `x` e `y`, atribua valores diferentes e verifique se são iguais.
let x = 5
let y = 10 
console.log("5"=== "10")

// 14. Crie uma variável `idade` e verifique se a pessoa é maior de idade (idade >= 18) e exiba uma mensagem correspondente.
let idade1= 16
console.log( `Ana é maior de idade?: ${idade1 >= 18}`)

// 15. Crie duas strings, `senha1` e `senha2`, e verifique se elas são iguais.
let senha1 = "21102008"
let senha2= "21092008"
let resultado2 =senha1 === senha2
console.log(resultado2)

// 16. Crie uma string e exiba o número de caracteres que ela contém.
  let nome1 = "Ana Carolina de Oliveira"
  console.log(nome1.length)
  
// 18. Crie uma variável numérica e verifique se é par ou ímpar usando um operador aritmético.
let  numero = 4
console.log(numero % 2 === 0)

// 20. Crie duas variáveis, `nota1` e `nota2`, calcule a média e verifique se a média é maior ou igual a 7.
let nota1 =3
let nota2=4
console.log(nota1+nota2)