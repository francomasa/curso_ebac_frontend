// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

class Pokemon {
    //Com o # definimos que o atributo é privado
    #hp = 100;
    constructor(nomeDoPokemon, tipodoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipodoPokemon;
    }

    atacar(nomeDoAtaque){ 
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -=10;
    }

    getHp() {
        console.log(this.#hp)
    }
}


class Pikachu extends Pokemon {
    constructor(){
        //para assignar os valores na clase pai
        super('Pikachu', 'Eletrico');
    }
    atacar(){
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

const picachu1 = new Pikachu();
const pikachu = new Pokemon("Pìcachu", 'Eletrico');
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'Eletrico';

pikachu.atacar('choque do trovão');

console.log(pikachu);
console.log(picachu1);

console.log(picachu1 instanceof Pikachu);
console.log(picachu1 instanceof Pokemon);

picachu1.recebeuAtaque();
picachu1.atacar();

picachu1.getHp()
