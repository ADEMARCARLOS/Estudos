//Função sem retorno
function imprimirSoma (a,b) {
    console.log (a+b)
}
imprimirSoma (2,3);
imprimirSoma (2); // Retorna um NaN pois o valor de b é undefined
imprimirSoma (2,10,3,4,5,6) //Ele pega os dois primeiros valores e ignora o resto
imprimirSoma () // Retorna um Nan pois os valores são undefined

//Função com retorno
function soma (a, b = 0) {
    return a + b
}

console.log (soma(2,3))
console.log (soma(20)) //Retorna a soma, uma vez que o parametro b foi definido como Zero
console.log (soma()) //Retorna um Nan pois o valor de a é undefinid

function buba (a=9,b=0) {
    return a + b
}
console.log (buba ())