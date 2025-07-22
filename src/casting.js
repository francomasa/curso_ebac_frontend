"use strict";
var casting;
(function (casting) {
    let idade = 25;
    let idades = [10, 20, 30];
    idade.toFixed();
    idade.length;
    idades.forEach(x => { console.log(x); });
    // para converter o tipo de valor que asignamos a 
    // uma variavel podemos primeiro converter para o
    // tipo unknown(desconhecido) e depois para o tipo
    // que tem a variavel
    // recomendado NÃO utilizar este tipo de espreções
    // usada em casos no que não sanemos o tipo de dado
    // que vamos a receber
    let nome = 35;
})(casting || (casting = {}));
