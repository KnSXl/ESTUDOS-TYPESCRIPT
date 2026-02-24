// Tipos Especiais

// Any (evitar usar 👎)
let valor: any = 10;
valor = "texto";

// Union Type
// Aceita mais de um tipo:
let codigo: string | number;

codigo = 123;
codigo = "ABC123";

/* Uma dúvida foi: "Mas qual a diferença entre type e interface?"

    Responsta:
    Para objetos → interface
    Para qualquer outra coisa → type
*/