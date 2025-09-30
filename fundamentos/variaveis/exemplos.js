// Exemplos de variáveis em JavaScript

// var (evitar)
var x = 10;
if (true) {
  var x = 20; // sobrescreve o x anterior!
}
console.log(x); // 20

// let (escopo de bloco)
let y = 10;
if (true) {
  let y = 20; // esta é outra variável, só existe aqui!
  console.log(y); // 20
}
console.log(y); // 10

// const (não pode reatribuir)
const z = 10;
z = 20; // Erro! Não pode mudar o valor de z

const arr = [1, 2, 3];
arr.push(4); // Isso funciona! O conteúdo do array pode mudar
console.log(arr); // [1, 2, 3, 4]
