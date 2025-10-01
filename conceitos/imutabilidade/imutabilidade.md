# Imutabilidade

## O que é Imutabilidade?

Imutabilidade significa **não alterar dados existentes**.  
Em vez de modificar valores, criamos **novos objetos ou arrays** com as alterações necessárias.

## Por que é importante?

- **Previsibilidade**: valores não mudam inesperadamente.
- **Debugging mais fácil**: menos efeitos colaterais.
- **Concorrência/assíncrono**: dados imutáveis são seguros.
- **Histórico de estados**: útil para undo/redo e time-travel debugging.

## Exemplos em JavaScript

- Arrays: métodos imutáveis (`map`, `filter`, `reduce`, `concat`, `slice`)
- Objetos: spread/rest operators, `Object.assign`, `Object.freeze`

## Imutabilidade e Funções Puras

- Funções puras dependem de dados imutáveis para garantir **previsibilidade e ausência de efeitos colaterais**.
- Combinando funções puras + imutabilidade, seu código se torna mais **robusto e testável**.

## Ferramentas e Técnicas

- Spread/rest operators (`...`)
- `Object.freeze()` para objetos imutáveis (shallow)
- Bibliotecas: [Immer](https://immerjs.github.io/immer/) e [Immutable.js](https://immutable-js.github.io/immutable-js/)

## Atenção / Trade-offs

- Mais criação de objetos → maior uso de memória.
- Performance pode ser impactada em operações muito grandes, mas técnicas como **structural sharing** ajudam a mitigar.
