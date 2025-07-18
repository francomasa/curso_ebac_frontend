//MAP

let meuMap = new Map();

// Metodo set para atribuir valores no meuMap
meuMap.set('nome', 'Franco');
meuMap.set('stack', 'html, css, js');

console.log(meuMap);

//Metodo get retornar o valor pedido do meuMap
const nome = meuMap.get('nome');

console.log(nome);

// Metodo size para saber quantos elemento contain o map
console.log(meuMap.size);

//Metodo has para saber se existe um atributo no meuMap
console.log(meuMap.has('nome'));


//Para obtener as chaves do meuMap
for (let chave of meuMap.keys()){
    console.log(chave);
}
// Resultante
// nome
// stack

//Para obtener as valores do meuMap
for (let valor of meuMap.values()){
    console.log(valor);
}
// Resultante
// Franco
// html, css, js

//Para obtener as entradas do meuMap
for (let entrada of meuMap.entries()){
    console.log(entrada);
    //console.log(entrada['nome']);
}
// Resultante
// [ 'nome', 'Franco' ]
// [ 'stack', 'html, css, js' ]


//Para obtener as entradas com chave e valor do meuMap
for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}
// Resultante
// nome: Franco
// stack: html, css, js

//Para eliminar um valor de meuMap
meuMap.delete('stack');

console.log(meuMap);

//SET
// O set contain todos os metodos que o MAP 
// e agrega o metodo add
const cpfs = new Set();

cpfs.add('29399181049');
cpfs.add('29746985060');
cpfs.add('84200699060');

console.log(cpfs);

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ["Gian Souza", 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];
// Converte um array para um set
// Set não permite valores duplicados, então va a 
// eliminar os valores duplicados
const arrayComoSet = new Set([...array]);

console.log(arrayComoSet);

//Para converter un SET num Array
const arraySemDuplicados = [...arrayComoSet];
//Obtemos o mesmo resultado com Array.from(SET)
const newArrayFromSet = Array.from(arrayComoSet); 
console.log(arraySemDuplicados);
console.log(newArrayFromSet);

//Metodo clear para eliminar todos os elementos do meuMap
meuMap.clear()
console.log(meuMap.size);