# Variáveis em JavaScript

As variáveis armazenam valores que podem ser utilizados e modificados no decorrer do código.

## Tipos de declaração

### `var`

- **Escopo de função:** Só existe dentro da função onde foi criada. Se estiver fora de uma função, é global.
- **Hoisting:** O JavaScript "move" a declaração para o topo do escopo antes de executar o código. Isso pode causar confusão, pois você pode usar a variável antes de declará-la.
- **Deve ser evitada:** Por ser antiga e causar comportamentos inesperados, prefira let ou const.

---

### `let`

- **Escopo de bloco:** Só existe dentro do bloco `{ ... }` onde foi criada (por exemplo, dentro de um if, for, etc).
- **Mais moderna e segura:** Evita problemas de sobrescrita e hoisting.
- **Pode ser reatribuída:** Você pode mudar o valor depois de criar.

---

### `const`

- **Escopo de bloco:** Igual ao let, só existe dentro do bloco.
- **Valor imutável:** Não pode ser reatribuída (mas objetos e arrays podem ser modificados internamente).
- **Usada para valores que não mudam:** Ideal para constantes.

## Boas práticas

- Prefira `const` sempre que possível.
- Use `let` apenas quando precisar reatribuir valores.
- Evite `var` em código moderno.

---

📚 Referências:

- [MDN - Variáveis](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables)
