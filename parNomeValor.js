// par nome/valoro

const saudacao = "Opa" // contexto léxico 1 (está dentro do arquivo)
//Em que local fisico ele foi definido

function exec () {
    const saudacao = "Falaaa" //contexto léxico (está dentro da função)
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Teresina",
        numero: 134
    }
}

console.log (saudacao);
console.log (exec());
console.log (cliente)