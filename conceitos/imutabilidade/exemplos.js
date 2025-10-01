// --------- Imutabilidade com Arrays ---------
const numbers = [1, 2, 3];

// NÃO imutável (mutável)
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// Imutável
const newNumbers = [...numbers, 5];
console.log(numbers); // [1, 2, 3, 4]
console.log(newNumbers); // [1, 2, 3, 4, 5]

// Usando métodos imutáveis
const filtered = numbers.filter((n) => n % 2 === 0);
console.log(filtered); // [2, 4]

// --------- Imutabilidade com Objetos ---------
const user = { name: "Ana", age: 25 };

// NÃO imutável
user.age = 26;
console.log(user); // { name: "Ana", age: 26 }

// Imutável
const updatedUser = { ...user, age: 27 };
console.log(user); // { name: "Ana", age: 26 }
console.log(updatedUser); // { name: "Ana", age: 27 }

// Object.freeze (imutabilidade shallow)
const frozen = Object.freeze({ a: 1, b: 2 });
frozen.a = 99; // não altera
console.log(frozen); // { a: 1, b: 2 }

// --------- Combinação com Funções Puras ---------
function addItem(list, item) {
  return [...list, item]; // não altera lista original
}

const fruits = ["maçã", "banana"];
const newFruits = addItem(fruits, "uva");

console.log(fruits); // ["maçã", "banana"]
console.log(newFruits); // ["maçã", "banana", "uva"]
