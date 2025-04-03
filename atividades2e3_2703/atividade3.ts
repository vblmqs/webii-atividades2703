/* Crie um enum chamado DiaSemana com os dias de domingo a
sábado. Em seguida, escreva uma função que receba um número
de 0 a 6 e retorne o nome correspondente ao dia da semana,
utilizando switch. Utilize const para definir o dia atual e mostre a
saída no console.*/

enum DiaSemana { 
    Domingo = 0, 
    Segunda = 1, 
    Terça = 2, 
    Quarta = 3, 
    Quinta = 4, 
    Sexta = 5, 
    Sábado = 6 
}

function obterDia(numero: number): string {
    switch (numero) {
        case 0: return "Domingo";
        case 1: return "Segunda-feira";
        case 2: return "Terça-feira";
        case 3: return "Quarta-feira";
        case 4: return "Quinta-feira";
        case 5: return "Sexta-feira";
        case 6: return "Sábado";
        default: return "Número inválido! Digite um valor de 0 a 6.";
    }
}

const diaAtual: number = 4; 
console.log(`Hoje é: ${obterDia(diaAtual)}`);
