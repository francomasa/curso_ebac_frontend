class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome:string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} diz oi`;
    }
}

class contaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco(){
        return 123;
    }

    getSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    private retirar(valor: number) {
        if(this.getSaldo() > valor){
            this.saldo -= valor;
            console.log(`Saldo: ${this.saldo}`);
        }
        else{
            console.log("Saldo Insuficiente")
        }
    }
}

class ContaBancariaPessoaFisica extends contaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456);
contaDoPedro.depositar(100);
const saldoAtual = contaDoPedro.getSaldo();
console.log(`Saldo: ${saldoAtual}`);

const numeroDoBanco = contaBancaria.retornaNumeroDoBanco;