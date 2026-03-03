/**
 * Crie uma função que aceite:
 *     string | number
 * 
 * E retorne:
 *     Se for string → comprimento
 *     Se for number → número multiplicado por 2
 */

const unionTypes = (valor: string | number): number => {
    if (typeof (valor) === 'string') {
        return valor.length;
    } else {
        return valor * 2;
    }
};

console.log(unionTypes('Olá'));