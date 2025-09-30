// Exemplos de Tipos de Dados

// ----- Primitivos -----

// string
const nome = "Maria";
console.log(typeof nome); // "string"

// number
const idade = 30;
const altura = 1.75;
console.log(typeof idade, typeof altura); // "number" "number"

// boolean
const ativo = true;
console.log(typeof ativo); // "boolean"

// undefined
let x;
console.log(typeof x); // "undefined"

// null
const vazio = null;
console.log(typeof vazio); // "object" (peculiaridade do JS)

// symbol
const id = Symbol("id");
console.log(typeof id); // "symbol"

// bigint
const big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"

// ----- Referência -----

// Object
const pessoa = { nome: "Maria", idade: 30 };
console.log(typeof pessoa); // "object"

// Array
const lista = [1, 2, 3];
console.log(typeof lista); // "object" (arrays são objetos em JS)

// Function
function somar(a, b) {
  return a + b;
}
console.log(typeof somar); // "function"
