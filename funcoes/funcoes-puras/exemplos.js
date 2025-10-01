// Exemplo 1 - Função pura
function soma(a, b) {
  return a + b; // sempre o mesmo resultado para os mesmos parâmetros
}
console.log(soma(2, 3)); // 5

// Exemplo 2 - Função impura (depende de estado externo)
let contador = 0;
function incrementar() {
  contador++; // efeito colateral
  return contador;
}
console.log(incrementar()); // valor depende de contador externo

// Exemplo 3 - Função pura com arrays (usando map)
function dobrar(lista) {
  return lista.map((n) => n * 2); // não altera a lista original
}
console.log(dobrar([1, 2, 3])); // [2, 4, 6]

// Exemplo 4 - Impura vs pura com objetos
function adicionarIdImpuro(obj) {
  obj.id = Math.random(); // modifica o objeto original
  return obj;
}

function adicionarIdPuro(obj) {
  return { ...obj, id: Math.random() }; // cria novo objeto
}

const user = { nome: "Ana" };
console.log(adicionarIdImpuro(user)); // modifica o original
console.log(adicionarIdPuro(user)); // cria um novo
