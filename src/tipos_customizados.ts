// TYPE
type aluno = {
    nome: string;
    //se queremos definir um atributo como opcional
    //agregamos no final o signo de ?
    curso?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno){
    console.log(aluno.nome);
}

exibeAluno(novoAluno);