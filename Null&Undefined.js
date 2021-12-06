let valor //não inicializada
console.log (valor); // foi declarado, mas não inicializado
//console.log (valor2) 0 nem foi declarado, se rodar vai dar erro

valor = null // a variável foi definida como nulo, sendo inicializada0
console.log (valor);

//Não é legal utilizarmos undefined, melhor deixar para o programa usar
//Caso deseja zerar o valor de uma variável, melhor usar null

const produto = {};
console.log (produto.preco) // ele retorna undefined pois não foi definido o preço
console.log (produto) //objeto vazio

produto.preco = 3.50

console.log (produto) //Agora o objeto tem um atributo retornando o valor do preço
// a forma de tirar um atributo a um objeto, se usa delete

produto.preco = null // sem preço mas com identificação
console.log (!!produto.preco);
console.log (produto);

