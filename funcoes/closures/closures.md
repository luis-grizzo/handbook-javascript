# Closures

### O que são Closures?

Um **closure** é a combinação de uma função com o escopo léxico no qual ela foi criada.  
Isso significa que uma função "lembra" das variáveis do local onde foi definida, mesmo que seja executada em outro contexto.

---

### Quando usar Closures?

- **Encapsulamento** → manter variáveis privadas.
- **Funções especializadas** → criar funções que lembram de parâmetros.
- **Manter estado** → preservar dados entre chamadas de funções.
- **Callbacks e assíncronas** → muito usados em eventos, `setTimeout`, `promises`.

---

### Atenção

- Closures guardam **referências** às variáveis, não cópias.
- Podem causar **memory leaks** se variáveis grandes forem mantidas vivas sem necessidade.
- São fundamentais no **JavaScript funcional**.
