/**
 * Crie um enum StatusPedido com:
 *     Pendente
 *     Enviado
 *     Entregue
 *     Cancelado
 * 
 * Depois crie uma função que receba o status e retorne uma mensagem correspondente.
 */

// Enum que representa os possíveis status de um pedido
enum StatusPedido {
    Pendente,
    Enviado,
    Entregue,
    Cancelado,
    Outro,
}

/**
 * Retorna a mensagem correspondente ao status do pedido
 * @param status - Status atual do pedido
 * @returns Mensagem descritiva do status
 */
function obterMensagemStatus(status: StatusPedido): string {
    switch(status) {
        case StatusPedido.Pendente:
            return 'Seu pedido está pendente';
        case StatusPedido.Enviado:
            return 'Seu pedido foi enviado';
        case StatusPedido.Entregue:
            return 'Seu pedido foi entregue';
        case StatusPedido.Cancelado:
            return 'Seu pedido foi cancelado';
        default:
            return 'Status desconhecido';
    }
}

// Define o status atual do pedido
const statusAtual: StatusPedido = StatusPedido.Pendente;  // Pedido ainda não processado
// const statusAtual: StatusPedido = StatusPedido.Enviado;  // Pedido já enviado ao cliente
// const statusAtual: StatusPedido = StatusPedido.Entregue;  // Pedido entregue com sucesso
// const statusAtual: StatusPedido = StatusPedido.Cancelado;  // Pedido cancelado
// const statusAtual: StatusPedido = StatusPedido.Outro;  // Status não mapeado

console.log(obterMensagemStatus(statusAtual));  // Exibe a mensagem referente ao status atual