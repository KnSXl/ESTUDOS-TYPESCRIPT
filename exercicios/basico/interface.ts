/**
 * Crie uma interface Usuario com:
 *     id (number)
 *     nome (string)
 *     email (string)
 *     ativo (boolean)
 * 
 * Depois crie um objeto que implemente essa interface.
 */

// interface Usuário
interface Usuario {
    id: number,
    nome: string,
    email: string,
    ativo: boolean,
}

// Criando um usuário
const usuario: Usuario = {
    id: 1,
    nome: 'João',
    email: 'joao@gmail.com',
    ativo: true,
}

console.log(usuario);