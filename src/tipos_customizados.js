"use strict";
const alunos = [
    {
        nome: "Carlos",
        curso: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        curso: ["Front-end", "Python"],
        idade: 27,
    },
];
alunos.push({
    nome: "Julia",
    curso: ['Arquitetura'],
    idade: 29,
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
exibeAluno(novoAluno);
