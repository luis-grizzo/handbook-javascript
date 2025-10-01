// Exemplo 1 - Função interna acessando escopo externo
function saudacao(nome) {
  return function () {
    console.log(`Olá, ${nome}!`);
  };
}

const olaJoao = saudacao("João");
olaJoao(); // "Olá, João!"

// Exemplo 2 - Função fábrica
function multiplicador(fator) {
  return function (n) {
    return n * fator;
  };
}

const dobro = multiplicador(2);
const triplo = multiplicador(3);

console.log(dobro(5)); // 10
console.log(triplo(5)); // 15

// Exemplo 3 - Variável privada com closure
function contador() {
  let valor = 0;

  return {
    incrementar: function () {
      valor++;
      return valor;
    },
    decrementar: function () {
      valor--;
      return valor;
    },
    obterValor: function () {
      return valor;
    },
  };
}

const c = contador();
console.log(c.incrementar()); // 1
console.log(c.incrementar()); // 2
console.log(c.obterValor()); // 2
console.log(c.decrementar()); // 1
