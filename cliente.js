function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
    
}
function Cliente(nome, beneficios){
    this.beneficios = beneficios;
    // this.salario = salario;
    //Para encapsular una variavel e deixar ela privada
 
    this.getBeneficios = function() {
        return this.beneficios;
    }

    this.setBeneficios = function(valor) {
        this.beneficios = valor;

    }

    

    Pessoa.call(this, nome);
}

function Vip(nome){
    Cliente.call(this, nome, "vip");
    this.trocarBeneficio = function(valor) {
        this.setBeneficios(valor);
    }
}


function Free(nome){
    Cliente.call(this, nome, "Free");
    this.trocarBeneficio = function(valor) {
        this.setBeneficios(valor);
    } 
}


const cliente1 = new Cliente('Maria', 'Vip');
const clienteVip = new Vip('Pedro');
const clienteFree = new Free('Paula');


console.log(cliente1.nome + ' ' + cliente1.getBeneficios());
console.log(clienteVip.nome + ' ' + clienteVip.getBeneficios());
console.log(clienteFree.nome + ' ' + clienteFree.getBeneficios());

cliente1.setBeneficios('Free')
clienteFree.trocarBeneficio('Vip');
clienteVip.trocarBeneficio('Free');
console.log('------------------------------------------')
console.log(cliente1.nome + ' ' + cliente1.getBeneficios());
console.log(clienteVip.nome + ' ' + clienteVip.getBeneficios());
console.log(clienteFree.nome + ' ' + clienteFree.getBeneficios());
