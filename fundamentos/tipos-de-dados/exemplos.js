// Exemplos de Tipos de Dados

// ----- Primitivos -----

// string
const name = "Maria";
console.log(typeof name); // "string"

// number
const age = 30;
const height = 1.75;
console.log(typeof age, typeof height); // "number" "number"

// boolean
const active = true;
console.log(typeof active); // "boolean"

// undefined
let x;
console.log(typeof x); // "undefined"

// null
const empty = null;
console.log(typeof empty); // "object" (peculiaridade do JS)

// symbol
const id = Symbol("id");
console.log(typeof id); // "symbol"

// bigint
const big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"

// ----- Referência -----

// Object
const person = { name: "Maria", age: 30 };
console.log(typeof person); // "object"

// Array
const list = [1, 2, 3];
console.log(typeof list); // "object" (arrays são objetos em JS)

// Function
function sum(a, b) {
  return a + b;
}
console.log(typeof sum); // "function"
