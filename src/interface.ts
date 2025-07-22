class Conta {
    numeroDaConta: number;
    saldo: number = 0;
    cnpj: number = 111111111111;
    
    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }

    getCnpj() {
        return this.cnpj;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}
// Como a conta salario no permite transações criamos
// uma interface para realizarlas
// Palavra reservada interface com o nome da interface
// começando por convenção con a letra I maiuscula
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2{
    telefone: number;
}

class ContaCorriente extends Conta implements ITransacional, IExemplo2 {
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;
}
