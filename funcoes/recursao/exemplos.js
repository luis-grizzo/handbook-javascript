// Exemplo 1 - Fatorial
function factorial(n) {
  if (n === 0) return 1; // caso base
  return n * factorial(n - 1); // chamada recursiva
}

console.log(factorial(5)); // 120

// Exemplo 2 - Fibonacci
function fibonacci(n) {
  if (n < 2) return n; // caso base
  return fibonacci(n - 1) + fibonacci(n - 2); // chamada recursiva
}

console.log(fibonacci(6)); // 8

// Exemplo 3 - Somando elementos de um array
function sumArray(arr) {
  if (arr.length === 0) return 0; // caso base
  return arr[0] + sumArray(arr.slice(1)); // reduzindo array
}

console.log(sumArray([1, 2, 3, 4])); // 10
