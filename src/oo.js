"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} diz oi`;
    }
}
class contaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 123;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    retirar(valor) {
        if (this.getSaldo() > valor) {
            this.saldo -= valor;
            console.log(`Saldo: ${this.saldo}`);
        }
        else {
            console.log("Saldo Insuficiente");
        }
    }
}
class ContaBancariaPessoaFisica extends contaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
contaDoPedro.depositar(100);
const saldoAtual = contaDoPedro.getSaldo();
console.log(`Saldo: ${saldoAtual}`);
const numeroDoBanco = contaBancaria.retornaNumeroDoBanco;
