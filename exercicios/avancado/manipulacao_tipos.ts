/**
 * Crie:
 *     Um tipo Pessoa
 *     Um tipo PessoaOpcional usando Partial<Pessoa>
 *     Um tipo PessoaSomenteLeitura usando Readonly<Pessoa>
 */

// Tipo base com todas as propriedades obrigatórias
type Pessoa = {
    nome: string;
    idade: number;
    email: string;
};

// Mesmo tipo, mas com todas as propriedades opcionais
type PessoaOpcional = Partial<Pessoa>;

// Mesmo tipo, mas somente leitura (não pode alterar depois)
type PessoaSomenteLeitura = Readonly<Pessoa>;

// Objeto completo, todas as propriedades obrigatórias
let pessoa1: Pessoa = {
    nome: "Carlos",
    idade: 30,
    email: "carlos@email.com"
};

// Pode ter apenas algumas propriedades
let pessoa2: PessoaOpcional = {
    nome: "Ana"
};

// Pode ser até um objeto vazio
let pessoa3: PessoaOpcional = {};

// Objeto que não pode ser modificado após criado
let pessoa4: PessoaSomenteLeitura = {
    nome: "Mariana",
    idade: 25,
    email: "mariana@email.com"
};

// Exemplos de uso:

// Pode alterar normalmente
console.log('pessoa1 antes:', pessoa1);
pessoa1.nome = 'João';
console.log('pessoa1 depois:', pessoa1);

// Pode alterar, pois é opcional (mas editável)
console.log('pessoa2 antes:', pessoa2);
pessoa2.nome = '';
console.log('pessoa2 depois:', pessoa2);

// Pode redefinir o objeto
console.log('pessoa3 antes:', pessoa3);
pessoa3 = {};
console.log('pessoa3 depois:', pessoa3);

// Não pode alterar propriedades (somente leitura)
console.log('pessoa4 antes:', pessoa4);
// pessoa4.nome = 'Fabiana';  // ERRO
console.log('pessoa4 depois:', pessoa4); 