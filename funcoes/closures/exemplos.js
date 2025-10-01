// Exemplo 1 - Função interna acessando escopo externo
function greeting(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const helloJohn = greeting("John");
helloJohn(); // "Hello, John!"

// Exemplo 2 - Função fábrica
function multiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Exemplo 3 - Variável privada com closure
function counter() {
  let value = 0;

  return {
    increment: function () {
      value++;
      return value;
    },
    decrement: function () {
      value--;
      return value;
    },
    getValue: function () {
      return value;
    },
  };
}

const cnt = counter();
console.log(cnt.increment()); // 1
console.log(cnt.increment()); // 2
console.log(cnt.getValue()); // 2
console.log(cnt.decrement()); // 1
