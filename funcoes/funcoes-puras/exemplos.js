// Exemplo 1 - Função pura
function sum(a, b) {
  return a + b; // sempre o mesmo resultado para os mesmos parâmetros
}
console.log(sum(2, 3)); // 5

// Exemplo 2 - Função impura (depende de estado externo)
let counter = 0;
function increment() {
  counter++; // efeito colateral
  return counter;
}
console.log(increment()); // valor depende de contador externo

// Exemplo 3 - Função pura com arrays (usando map)
function double(list) {
  return list.map((n) => n * 2); // não altera a lista original
}
console.log(double([1, 2, 3])); // [2, 4, 6]

// Exemplo 4 - Impura vs pura com objetos
function addIdImpure(obj) {
  obj.id = Math.random(); // modifica o objeto original
  return obj;
}

function addIdPure(obj) {
  return { ...obj, id: Math.random() }; // cria novo objeto
}

const user = { name: "Ana" };
console.log(addIdImpure(user)); // modifica o original
console.log(addIdPure(user)); // cria um novo
