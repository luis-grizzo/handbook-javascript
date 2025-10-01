# Recursão

## O que é Recursão?

Recursão é quando uma função chama a si mesma, direta ou indiretamente, para resolver um problema.  
Ela divide um problema em subproblemas menores até alcançar um **caso base**.

## Estrutura básica

1. **Caso base** → ponto de parada.
2. **Chamada recursiva** → a função se chama com um problema menor.

Sem caso base, a função entraria em um loop infinito e causaria _stack overflow_.

## Quando usar Recursão?

- Estruturas de dados → árvores, grafos, listas ligadas.
- Problemas matemáticos → fatorial, Fibonacci, MDC.
- Subdivisão → dividir e conquistar (merge sort, quicksort).
- Navegação de estruturas aninhadas → JSON, DOM.

## Atenção

- Recursão pode ser **ineficiente** se não for otimizada.
- Iterações simples geralmente são mais performáticas.
- Em linguagens sem otimização de _tail call_ (como JS), recursões profundas podem quebrar a pilha.
