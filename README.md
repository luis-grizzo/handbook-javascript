# 📘 Handbook JavaScript

Repositório de estudos e referência em JavaScript — organizado para facilitar leitura, prática e consulta. A ideia: teoria em Markdown, prática em arquivos .js. Simples, previsível e fácil de navegar.

---

### 🛠️ Pré-requisitos

Para executar os arquivos JavaScript deste repositório, é necessário ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Verifique a instalação com:

```bash
node -v
```

Caso não tenha o Node.js, acesse o site oficial para download e instruções de instalação.

---

### 🎯 Objetivos

- Estudar e revisar conceitos do JavaScript
- Manter exemplos práticos e comentados
- Criar uma referência pessoal aberta a outros devs

---

### 🚀 Como usar

Clone o repositório:

```bash
git clone https://github.com/luis-grizzo/handbook-javascript.git
cd handbook-javascript
```

Execute exemplos diretamente com Node:

```bash
node fundamentos/variaveis/exemplos.js
```

---

### ⚙️ Automação com Makefile

Este repositório inclui um **Makefile** na raiz para facilitar a criação e organização de novos tópicos.

### 📋 Requisitos

Para usar os comandos, você precisa ter instalado no seu sistema:

- [Make](https://www.gnu.org/software/make/) (geralmente já vem em Linux/macOS; no Windows pode ser instalado via [Chocolatey](https://chocolatey.org/) ou WSL).
- [tree](http://mama.indstate.edu/users/ice/tree/) (opcional, mas recomendado para listar a estrutura em árvore).
  - Caso não tenha `tree`, o comando `find` será usado como fallback.

### 🚀 Comandos disponíveis

#### Criar um novo tópico

```bash
make topic name=variaveis category=fundamentos
```

Isso vai gerar a seguinte estrutura automaticamente:

```bash
fundamentos/variaveis/
├── variaveis.md
└── exemplos.js
```

#### Listar os tópicos existentes

```bash
  make list
```

Exibe todos os tópicos já criados no repositório em formato de árvore:

```bash
fundamentos
└── variaveis
funcoes
├── closures
├── funcoes-puras
└── recursao
```

### 💡 Observação

- Sempre rode os comandos a partir da raiz do repositório.
- A flag category deve corresponder a uma das pastas existentes, como fundamentos, funcoes, avancado, praticas, extras.
- Você pode adaptar o Makefile adicionando novas tarefas conforme suas necessidades (ex: remover tópicos, gerar índice automático, etc).

---

### 📚 Referências

- MDN Web Docs
<!-- - Eloquent JavaScript
- You Don’t Know JS (Kyle Simpson) -->

---

### 📄 Licença

Este repositório está licenciado sob a MIT License – veja o arquivo LICENSE
para mais detalhes.
