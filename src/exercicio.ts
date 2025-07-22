const multiplica = (num1: number, num2: number): number => num1 * num2;
let numero1 = 10;
let numero2 = 10;
const resultadoMultiplicacao: number = multiplica(numero1, numero2);

console.log(`Resultado: ${numero1} * ${numero2} = ${resultadoMultiplicacao}`);

let meuNome: string = "Franco";
const saudacao = (meuNome: string): string => `Ola ${meuNome}`;

const minhaSaudacao = saudacao(meuNome);
console.log(minhaSaudacao);