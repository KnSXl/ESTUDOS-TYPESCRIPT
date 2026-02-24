# ESTUDOS TYPESCRIPT 📘

## REQUISITOS ✅

- Node.js instalado
- Algum gerenciador de pacote (npm, yarn, etc.)

---

## DOWNLOADS 📦

### NO PROJETO (Recomendado) 📁

```bash
npm install typescript --save-dev
```

Instala o TypeScript como dependência de desenvolvimento.

### GLOBALMENTE NA MÁQUINA 🌍

```bash
npm install -g typescript
```

Permite usar o comando `tsc` diretamente no terminal.

---

## PASSO A PASSO DE COMO USAR 🚀

### CRIAR PASTA 📁
```bash
mkdir TYPESCRIPT
```

### ACESSAR DIRETÓRIO 📂
```bash
cd TYPESCRIPT
```

### INICIALIZAR PROJETO 📦

```bash
npm init -y
```

Cria o arquivo `package.json`.

### INSTALAR TYPESCRIPT NO PROJETO 📥
```bash
npm install typescript --save-dev
```

### CRIAR CONFIGURAÇÃO DO TYPESCRIPT ⚙️
```bash
npx tsc --init
```

ou

```bash
tsc
```

Caso tenha instalado o TypeScript globalmente na máquina.

Isso irá criar o arquivo `tsconfig.json`.

Ele controla:
- versão do JS gerado
- pasta de saída
- modo strict
- entre outras configurações

### CRIAR O ARQUIVO `index.ts` 📝

### ADICIONAR ESSE CONTEÚDO SIMPLES ✍️
```ts
function saudacao(nome: string): string {
    return `Olá ${nome}!`;
}

console.log(saudacao('Kauã'));
```

### COMPILAR PARA JAVASCRIPT 🔄
```bash
npx tsc index.ts
```

ou

```bash
tsc index.ts
```

Caso tenha instalado o TypeScript globalmente na máquina.

Isso vai gerar:

```bash
index.js
```

### EXECUTAR COM NODE ▶️
```bash
node index.js
```

---

## CASO NÃO QUEIRA COMPILAR MANUALMENTE 🔥

### INSTALAR O `TS-NODE` 📦
```bash
npm install ts-node --save-dev
```

### RODAR O ARQUIVO `index.ts` ▶️
```bash
npx ts-node index.ts
```

Terá o mesmo resultado.

---

## BIBLIOGRAFIA 📚

https://www.typescriptlang.org