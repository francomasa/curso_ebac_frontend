function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea1 = (base: number, altura: number): number => base * altura;

//quando a função no tem un return o retorno e do tipo void
function somar(...numeros:number[]): void {
    //numeros.reduce()
    console.log(numeros);
}

const soma = somar(10, 20, 30);


//retorna valores diferentes numa função
function teste(): string | number {
    if(10 > 5){
        return 'dez maior que 5';
    }
    else {
        return 5;
    }
}


const resultadoTeste = teste();
