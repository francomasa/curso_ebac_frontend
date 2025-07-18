
//ARROW FUNCTION
const minhzFuncao = () =>  'Diz Olá';

console.log(minhzFuncao());


const retornaUmCarro = () => {
    return {
        modelo: 'Ka',
        fabricante: 'Ford'
    }
}


const retornaUmCarro1 = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
});

console.log(retornaUmCarro1());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: function() {
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);