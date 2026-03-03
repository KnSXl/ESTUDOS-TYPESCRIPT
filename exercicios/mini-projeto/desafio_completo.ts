/**
 * Crie um Sistema de Gerenciamento de Tarefas com:
 *     Interface Tarefa
 * 
 *     Funções para:
 *         Adicionar tarefa
 *         Listar tarefas
 *         Remover tarefa
 *         Marcar como concluída
 * 
 *     Usar:
 *         Types
 *         Interface
 *         Enum
 *         Generics
 *         Async/Await
 */

enum StatusTarefa {
    PENDENTE = "PENDENTE",
    CONCLUIDA = "CONCLUIDA",
};

type ID = number;

interface Tarefa {
    id: ID,
    nome: string,
    descricao: string,
    concluida: StatusTarefa,
};

class GerenciadorTarefas<T extends Tarefa> {
    private tarefas: T[] = [];

    async listar(): Promise<T[]> {
        return this.tarefas;
    }

    async adicionar(tarefa: T): Promise<void> {
        this.tarefas.push(tarefa);
    };

    async remover(id: ID): Promise<void | undefined> {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === id);

        if (index !== -1) {
            this.tarefas.splice(index, 1);
        }
    };

    async marcarComoConcluido(id: ID): Promise<void> {
        const tarefa = this.tarefas.find(tarefa => tarefa.id === id);

        if (tarefa) {
            tarefa.concluida = StatusTarefa.CONCLUIDA;
        }
    };
};

const sistema = new GerenciadorTarefas<Tarefa>();

async function executar() {
    /* Listar tarefas */
    console.log('LISTANDO TAREFAS:');
    console.log(await sistema.listar());
    
    /* Adicionar tarefa */
    console.log('ADICIONANDO TAREFA...');
    await sistema.adicionar({
        id: 1,
        nome: 'Tarefa 1',
        descricao: 'Descrição 1',
        concluida: StatusTarefa.PENDENTE,
    });

    /* Listar tarefas */
    console.log('LISTANDO TAREFAS:');
    console.log(await sistema.listar());

    /* Marcar tarefa como conclída */
    console.log('MARCANDO TAREFA X COMO CONCLUÍDA...');
    await sistema.marcarComoConcluido(1);

    /* Listar tarefas */
    console.log('LISTANDO TAREFAS:');
    console.log(await sistema.listar());

    /* Deletar tarefa */
    console.log('DELETANDO TAREFA...');
    await sistema.remover(1);

    /* Listar tarefas */
    console.log('LISTANDO TAREFAS:');
    console.log(await sistema.listar());
}

executar();