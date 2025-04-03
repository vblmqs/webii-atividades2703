/*Crie uma função em TypeScript chamada calcularMedia que
receba uma quantidade indefinida de notas (valores number) e
retorne a média dessas notas. Utilize parâmetros variáveis.
Depois, chame a função com ao menos três notas e imprima o
resultado no console*/


function calcularMedia(...notas: number[]): number {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]; 
    }
    return soma / notas.length; 
}

console.log(calcularMedia(8, 9, 7));

