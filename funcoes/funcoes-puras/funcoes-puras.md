# Funções Puras

### O que são Funções Puras?

Uma função pura é uma função que:

1. **Sempre retorna o mesmo resultado** para os mesmos argumentos.
2. **Não causa efeitos colaterais** (não altera variáveis externas, não modifica inputs, não depende de estado externo).

---

### Exemplos de efeitos colaterais (que funções puras não fazem):

- Modificar variáveis globais.
- Alterar objetos/arrays recebidos como parâmetro.
- Executar operações dependentes do tempo (`Date.now()`).
- Depender de algo externo como `Math.random()`.

---

### Benefícios

- Mais fáceis de **testar**.
- Favorecem a **imutabilidade**.
- Ajudam na **previsibilidade** do código.
- Muito usadas em **programação funcional**.

---

### Observação

Nem sempre é possível ou desejável usar apenas funções puras, mas entender esse conceito é essencial.
