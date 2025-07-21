const redesSociais = ['Facebook', 'Instagram', 'Linkedin'];

for( let i = 0; i < redesSociais.length; i++) {
    console.log(`Tenho perfil em: ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeRedeSocial, indice){
    console.log(`#${indice} Tenho perfil em: ${nomeRedeSocial}`);
});

////////////////////////////////////////////////////////////////////////////

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function(numeroAtual){
    return numeroAtual * 2;
})

console.log(dobroDosNumeros);

////////////////////////////////////////////////////////////////////////////

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
});

console.log(alunos2);
//se no achar no array retorna undefined
console.log('find');
const paula = alunos2.find(function(itemAtual){
    return itemAtual.nome == 'Paula';
});

console.log(paula);
//Se for achado retornara >=0
const paulaId = alunos2.findIndex(function(itemAtual){
    return itemAtual.nome == 'Paula';
});

console.log(paulaId);

//PUSH Agregar valores no array
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
});

//EVERY
const every = alunos2.every(function(item){
    return item.curso === 'Frontend';
})

console.log(every);

//SOME
const some = alunos2.some(function(item){
    return item.curso === 'Backend';
})

const some2 = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso == 'Frontend';
})

console.log(some);
console.log(some2);

////////////////////////////////////////////////////////////

//Filter
//Com uma função publica
function filtraAlunos(aluno){
    return aluno.curso === 'Backend';
}
//funcao similar com ARROW function
const filtraAlunos2 = (aluno) => aluno.curso === 'Backend';
//quando tem só um argumento pode omitir os ()
//const filtraAlunos2 = aluno => aluno.curso === 'Backend';

const filter = alunos2.filter(filtraAlunos);
const filter1 = alunos2.filter(filtraAlunos2);
// Filter com função privada
const filter2 = alunos2.filter(function(item){
    return item.curso === 'Backend';
})

console.log(filter);
console.log(filter1);
console.log(filter2);


///////////////////////////////////////////////////////


const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual){
    return acumulador += itemAtual;
}, 0);

console.log(soma);

const nomeAlunos = alunos2.reduce(function(acumulador, itemAtual){
    return acumulador += `${itemAtual.nome} `;
}, '');

console.log(nomeAlunos);