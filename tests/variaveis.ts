let nome: string = 'João';  // String

let idade: number = 18;  // Number

let ativo: boolean = true;  // Boolean

// Arrays
let numeros: number[] = [1, 2, 3, 4];
let nomes: Array<string> = ["Ana", "Carlos", "Maria"];

// Objetos
let pessoa: { nome: string, idade: number } = {
    nome: "Lucas",
    idade: 18,
};

// Forma mais organizada usando 'type':
type Pessoa = {
    nome: string,
    idade: number,
};

let usuario: Pessoa = {
    nome: 'Fernanda',
    idade: 20,
};