const nome = 'Andressa'
const sobrenome = 'Carvalho'
const idade = 22
const peso = 53
const alturaEmM = 1.57 //ALTURA EM METROS
const anoAtual = 2023

let imc 
imc = peso / (alturaEmM * alturaEmM)
console.log(nome + ' ' + sobrenome + ' tem ' + idade +
' anos, e pesa ' + peso + 'kg. Tem altura de ' + alturaEmM +
' e seu IMC é de ' + imc)

let anoDeNascimento
anoDeNascimento = anoAtual - 23  
console.log('Andressa tem 22 anos e nasceu no ano de ' + anoDeNascimento)

//template strings ex: ${aquiFicaAVariavel}
