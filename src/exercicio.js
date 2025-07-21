const alunos = [
    { nome: "Franco", nota: 9 },
    { nome: "Alice", nota: 10 },
    { nome: "Bob", nota: 8 },
    { nome: "Carlos", nota: 5 }
];

console.log(alunos);


const alunosAprobados = alunos.filter(function(item){
    return item.nota >= 6;
})
const alunosReprobados = alunos.filter(function(item){
    return item.nota <= 6;
})

console.log("Alunos aprobados");
console.log(alunosAprobados);

console.log("Alunos Reprobados");
console.log(alunosReprobados);

