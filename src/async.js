function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++){
        execucoes++;
    }
    return execucoes;
}
// Cuando temos uma função muito pesada que demora mais
// tempo de execução, podemos utilizar o Promise para
// executar de forma paralela e não interromper o fluxo 
// de execução do codigo
// new Promise - para fazer a instancia
// - resolve: sera llamado en caso de succeso
// - reject: sera llamado en caso de alguma falha
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++){
            execucoes++;
        }
        resolve(execucoes);
    } catch(e){
        reject('Deu erro na iteração dos numeros');
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Logado com o usuario: ${login}`)
            }, 1000);
    })
}
//console.log(funcaoMuitoPesada());

//para tornar uma função asyncrona para syncrona
// async await
async function execucaoPrincipal(){
    console.log('inicio');
    let login = 'franco@gmail.com';
    promiseComParametros(login, 123456).then(resultado => {
        console.log(resultado);
    }).catch(erro => console.log(`Usuario ${login} no registrado`));
    try {
        //await funcaoMuitoPesadaPromise.then(resultadp => console.log(resultadp)).catch(erro => console.log(erro));
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch(e) {
        console.log(e);
    }
    console.log('fin');
}

execucaoPrincipal();

