console.log ("a =", a); //Ele declara a varíavel, mas diz q é indefinido
var a = 2 //ele joga o var a pra cima, mas ele só é clarada na linha 2
console.log ("a =", a);

/* por conta do issamento, o código acima ficaria assim
var a 
console.log ("a =", a)
a =2 
console.log ("a =", a) */

/* console.log ("b =", b) 
sem declarar a variável let antes, ele vai trazer
sempre erro */

let b = 2
console.log ("b =", b)