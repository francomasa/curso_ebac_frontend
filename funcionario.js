function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
    
}


function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    // this.salario = salario;
    //Para encapsular una variavel e deixar ela privada
    let _salario = salario;

    //getters e setters
    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor;  
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;

    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 2000);
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);

    }
}

function Gerente(nome){
    Funcionario.call(this, nome, "Gerente", 10000);
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);

    }
}


//const pessoa1 = new Pessoa('Maria')
const funcionario1 = new Funcionario('Maria', 'Dev Front end', 5000);
const estagiario1 = new Estagiario('Pedro');
const funcionario3 = new Gerente('Paula');
/*
funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.setSalario(7000);
console.log(funcionario1.getSalario());
*/
funcionario1.aumento();
console.log(funcionario1.nome + ' ' + funcionario1.getSalario());
estagiario1.aumento();
console.log(estagiario1.nome + ' ' + estagiario1.getSalario());
funcionario3.aumento();
console.log(funcionario3.nome + ' ' + funcionario3.getSalario());

funcionario3.dizOi();


console.log(typeof true);