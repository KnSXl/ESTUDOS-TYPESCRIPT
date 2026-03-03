/**
 * Crie uma função que simule buscar um usuário:
 *     function buscarUsuario(id: number): Promise<Usuario>
 * 
 * Use setTimeout para simular delay.
 */

interface Usuario {
    id: number,
    nome: string,
    email: string,
};

function buscarUsuario(id: number): Promise<Usuario> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarios: Usuario[] = [
                {
                    id: 1,
                    nome: 'João',
                    email: 'joao@gmail.com',
                },
                {
                    id: 2,
                    nome: 'Pedro',
                    email: 'pedro@gmail.com',
                },
                {
                    id: 3,
                    nome: 'Julia',
                    email: 'julia@gmail.com',
                },
            ];

            const usuario = usuarios.find(u => u.id === id);

            if (usuario) {
                resolve(usuario);
            } else {
                reject(new Error('Usuário não encontrado'));
            }
        }, 2000);
    });
}

buscarUsuario(1)
    .then(usuario => console.log(usuario))
    .catch(erro => console.log(erro.message));

/* async function executarBusca() {
    try {
        const usuario = await buscarUsuario(1);
        console.log('Usuário encontrado:', usuario);
        
    } catch (error) {
        console.error('Erro:', (error as Error).message);
    }
}

executarBusca(); */