const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('vrumm')
    }
}
const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('vrumm')
    }
}


function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('acelerar');
    }
}


const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019);
const carroDaMaria2 = new Carro('Ka', 'Ford', 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = 'Franco';
const idade = 40;
const ehMaiorDeIdade = true;
const conhecimentos = ['html', 'css', 'javascript'];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(pessoa.nome);


function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

//pessoa.sobrenome = undefined;
pessoa['sobrenome'] = 'Massaccesi';

//para tornar um objeto estatico usamos o metodo freeze
Object.freeze(pessoa);


pessoa.nome = 'Pepe';

//if(pessoa.sobrenome) {
if(pessoa['sobrenome']){
    console.log('a pessoa tem um sobrenome');
}
if('sobrenome' in pessoa){
    console.log('tem sobrenome');
}


console.log(pessoa['nome']);


console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));



/***********************************************
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(pessoa);

console.log(carroDaMaria2 instanceof Carro);
console.log(conhecimentos instanceof Array);

**************************************/
