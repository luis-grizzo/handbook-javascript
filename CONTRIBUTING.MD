# Guia de Contribuição

Este repositório tem como objetivo ser um **guia completo de estudo em JavaScript**, organizado de forma clara e consistente.  
Mesmo sendo de uso pessoal, este guia ajuda a manter um padrão para que os conteúdos sejam de fácil leitura e referência futura.

---

### 📂 Estrutura de pastas

Cada tópico da linguagem deve estar em uma pasta própria dentro da categoria correta:

```
categoria/
└── topico/
    ├── topico.md        # explicação teórica
    ├── exemplos.js      # exemplos comentados
    └── exercicios.js    # exercícios práticos
```

### Categorias

- `fundamentos/` → conceitos básicos (variáveis, operadores, funções, etc.)
- `avancado/` → recursos modernos e complexos (classes, promises, async/await, módulos, etc.)
- `praticas/` → mini projetos práticos (calculadora, to-do list, etc.)
- `extras/` → boas práticas, links, desafios extras

---

### ✍️ Como escrever os arquivos

### Arquivo `.md`

- Deve conter **explicações teóricas** e **conceitos principais**.
- Sempre incluir **exemplos curtos** em blocos de código.
- Organizar em seções (`##`) para facilitar a leitura.
- Sempre incluir uma seção de **Referências** ao final.

**Exemplo:**

```md
# Variáveis em JavaScript

## Tipos de declaração

- var
- let
- const

## Tipos de dados

- string
- number
- boolean

## Referências

- [MDN - Variáveis](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables)
```

---

### Arquivo `exemplos.js`

- Deve conter exemplos comentados e funcionais.
- Comentários no estilo // explicação curta logo acima da linha de código.
- O código deve ser claro e direto, sem excesso de abstrações.

**Exemplo:**

```js
// let (escopo de bloco)
let idade = 25;
idade = 26;
console.log(idade); // 26
```

---

### Arquivo `exercicios.js`

- Deve conter exercícios práticos, de preferência com enunciado como comentário.
- Pode incluir a solução ou deixar apenas o enunciado para treino.
- Sempre numerar os exercícios.

**Exemplo:**

```js
// 1. Declare uma variável com seu nome e exiba no console
let meuNome = "Maria";
console.log(meuNome);

// 2. Crie duas variáveis numéricas e exiba a soma delas
let a = 10;
let b = 20;
console.log(a + b);
```

---

### ✅ Boas práticas gerais

- Usar inglês para código (variáveis, funções, etc.) e português para explicações.
- Manter nomes de arquivos em minúsculas e, quando necessário, usar - para separar palavras.
- Sempre que possível, manter consistência de estilo nos exemplos (const por padrão, let quando necessário).
- Prefira exemplos simples e diretos em vez de complexos demais.

---

### 📌 Dicas

- Sempre que criar um novo tópico, use a mesma estrutura: topico.md, exemplos.js e exercicios.js.
- Consulte os arquivos já existentes para manter o mesmo padrão.
- Ao adicionar novos conteúdos, atualize também o README.md principal (índice de tópicos).
