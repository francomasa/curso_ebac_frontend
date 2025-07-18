
// arguments 
// Palabra reservada para poder receber n argumentos 
// numa funcão

function somar(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    } 
    return soma;
}

console.log(somar(10,20, 10, 20, 10, 20));

//REST
//usamos normalmente em funcoes
function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0);
    return soma;
}

console.log(somarComRest(10, 10, 20, 20, 40));


// SPREAD
// usamos normalmente para fazer concatenaçao, 
// prenchumento de objeto, console.log

const numeros = [1, 2, 3, 4];

console.log(...numeros);

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
//para fazer o mesmo com SPREAD
const timesDeFutebol1 = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

console.log(timesDeFutebol);
console.log(timesDeFutebol1);

const carroDaJulia = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.6
}


const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

//DESESTRUCTURAÇÃO
//const motorDoCarroDaAna = carroDaAna.motor;
const { motor:motorDoCarroDaAna } = carroDaAna;
const { motor:motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

//DESESTRUCTURAÇÃO DE ARRAY

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1);
console.log(item2);
console.log(item3);

console.log(outrosTimes);

const [...times] = timesDeFutebol;

console.log(times);
