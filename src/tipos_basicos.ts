// Boolean
let estaChovendo: boolean = false;

estaChovendo = true;

// number
let idade: number = 40;

let altura: number = 1.75;

// string
let nacionalidade: string = 'argentina';

// Arrays
const colegas: string[] = ['lucas', 'fernanda', 'franco']
// outra forma de criar arraus
const tecnologias: Array<string>= ['html', 'js', 'css'];

// Solo leitura
const notas: ReadonlyArray<number> = [10, 9, 6, 8]

// Tupla
const lista:[string, boolean, number] = ['Franco', true, 10]

const listaComNomeDoCampo:[nome: string, estuda: boolean, idade: number] = ['Franco', true, 10]

//union type
//a variavel va a aceitar tipo number ou string
let idadeDaAna: number | string = 25;
idadeDaAna = 20 
idadeDaAna = '20 anos'


//ANY
//aceita qualquer tipo de dado
// utilizado quando no sabemos qual 
// tipo de dado retornara o servidor
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1,2,3]
dadosDaApi = {}
dadosDaApi = 'string'


let curso = 'Front-end'