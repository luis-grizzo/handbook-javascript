// Exemplos de variáveis em JavaScript

// var (evitar)
var value = 10;
if (true) {
  var value = 20; // sobrescreve o value anterior!
}
console.log(value); // 20

// let (escopo de bloco)
let number = 10;
if (true) {
  let number = 20; // esta é outra variável, só existe aqui!
  console.log(number); // 20
}
console.log(number); // 10

// const (não pode reatribuir)
const constant = 10;
constant = 20; // Erro! Não pode mudar o valor de constant

const array = [1, 2, 3];
array.push(4); // Isso funciona! O conteúdo do array pode mudar
console.log(array); // [1, 2, 3, 4]
