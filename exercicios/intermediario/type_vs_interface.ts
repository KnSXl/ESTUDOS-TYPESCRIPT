/**
 * Crie um type chamado Produto com:
 *     id
 *     nome
 *     preço
 *     estoque
 * Depois:
 *     Crie uma função que receba um produto e retorne se ele está disponível.
 */

// Definição do type Produto
type Produto = {
    id: number,
    nome: string,
    preço: number,
    estoque: number,
};

// Função que verifica se o produto está disponível
const estaDisponivel = (produto: Produto): string => {
    return produto.estoque > 0 ? 'Sim' : 'Não';
};

// Exemplo de uso
const produto1: Produto = {
    id: 1,
    nome: 'Nootbook',
    preço: 3000,
    estoque: 2,
};

const produto2: Produto = {
    id: 1,
    nome: 'Cafeteira',
    preço: 3000,
    estoque: 0,
};

console.log(`O produto ${produto1.nome} está disponível? ${estaDisponivel(produto1)}`);
console.log(`O produto ${produto2.nome} está disponível? ${estaDisponivel(produto2)}`);