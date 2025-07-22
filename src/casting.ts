namespace casting {
    let idade: any = 25;
    let idades: any = [10, 20, 30];
    (idade as number).toFixed();
    (idade as string).length;
    (idades as string[]).forEach(x => {console.log(x);})

    // para converter o tipo de valor que asignamos a 
    // uma variavel podemos primeiro converter para o
    // tipo unknown(desconhecido) e depois para o tipo
    // que tem a variavel
    // recomendado NÃO utilizar este tipo de espreções
    // usada em casos no que não sanemos o tipo de dado
    // que vamos a receber
    let nome: string = 35 as unknown as string;
}