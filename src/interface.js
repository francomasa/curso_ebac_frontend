"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.cnpj = 111111111111;
        this.numeroDaConta = numeroDaConta;
    }
    getCnpj() {
        return this.cnpj;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorriente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
