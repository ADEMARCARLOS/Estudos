const escola = "Cod3r"


console.log (escola.charAt(4)); //faz a chamada do 4 caracter da constante
console.log (escola.charAt(8)); //Caso não tenha caracter traz o campo vazio na resposta
console.log (escola.charCodeAt(3)); //codigo referente ao Codigo html 
console.log (escola.indexOf("3")); //qual o indice ?

console.log (escola.substring(1)) // Vai pegar a patir do indice 1 até o fim
console.log (escola.substring(0,3)) // vai pegar a partir do indice 0, até o 3 sem incluir o 3

console.log("Escola ".concat(escola).concat("!"));
console.log (escola.replace(3, "e"));

console.log("Ana,Maria,Pedro,Ademar".split(","))
