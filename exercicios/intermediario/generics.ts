/**
 * Crie uma função genérica que receba um array de qualquer tipo e retorne o primeiro elemento.
 * 
 * Exemplo esperado:
 *     pegarPrimeiro<number>([1, 2, 3])
 *     pegarPrimeiro<string>(["a", "b"])
 */

// <T> → Define um tipo genérico
// T[] → O array é do tipo genérico.
// O retorno também é T, garantindo tipagem segura.
const pegarPrimeiroItemArray = <T>(lista: T[]): T | undefined => {
    return lista[0];
};

// Exemplos de Uso:
console.log(pegarPrimeiroItemArray<string>(['Olá', '1', 'true', '5']));  // "Olá"
console.log(pegarPrimeiroItemArray<boolean>([true]));  // true
console.log(pegarPrimeiroItemArray<number>([1, 5]));  // 1
console.log(pegarPrimeiroItemArray<string>([]));  // undefined