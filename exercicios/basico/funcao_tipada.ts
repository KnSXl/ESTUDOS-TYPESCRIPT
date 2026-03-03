/**
 *  TAREFAS:
 *      Crie uma função que receba dois números e retorne a soma
 *      Uma função que receba um nome e retorne uma mensagem de boas-vindas.
 *      Uma função que receba um array de números e retorne a média.
 */

/**
 * Soma dois números.
 * @param {number} numero1 - Primeiro número.
 * @param {number} numero2 - Segundo número.
 * @returns {number} Resultado da soma.
 */
function somarNumeros(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

/**
 * Gera mensagem de boas-vindas.
 * @param {string} nome - Nome da pessoa.
 * @returns {string} Mensagem formatada.
 */
function saudacao(nome: string): string {
    return `Bem vindo, ${nome}!`;
}

/**
 * Calcula a média de um array de números.
 * @param {array} notas - Lista de notas.
 * @returns {number} Valor médio das notas.
 */
function mediaNotas(notas: number[]): number {
    let totalNotas: number = 0;
    let totalMediaNotas: number = 0;

    // Percorre o array somando todas as notas
    notas.forEach(nota => {
        totalNotas += nota;
    });
    
    totalMediaNotas = totalNotas / notas.length;  // Divide a soma pela quantidade de notas

    return totalMediaNotas;
}

console.log(somarNumeros(1, 7));
console.log(saudacao('Pedro'));
console.log(mediaNotas([6, 6, 6, 6, 6]));