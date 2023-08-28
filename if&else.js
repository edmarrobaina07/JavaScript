/*

if & else

Controlador de Fluxo
IF(Se) -> Faça isso

ELSE(Se não) -> Executa o ELSE

Operadores de comparação
> maior que
< menor que
== igual que


*/

/* Exemplo Com o Else */

const notaDoAluno = 2.5
const notaDeCorte = 5 

if(notaDoAluno > notaDeCorte) {
/* O QUE SERÁ EXECUTADO, SE FOR VERDADEIRO */
console.log("Você está aprovado")
} else {
    /* SE O IF FOR FALSO, ELE ENTRA AQUI */
    console.log("Você está reprovado")
}



/* Exemplo sem usar o Else apenas com o IF

const notaDoAluno = 2.5
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte) {

console.log("Você está aprovado")
}

if(notaDoAluno < notaDeCorte) {
    console.log("Você está reprovado")
}

*/

/* Exemplo de comparação usando == */

const senhaDoUsuario = 123456
const sendaDigitada = 123457

if(senhaDoUsuario == sendaDigitada) {
    console.log("Logado com Sucesso")
} else {
    console.log("Senha Incorreta")
}
