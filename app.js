import readlineSync from "readline-sync";
let anwers = [];

while (true) {
  let input = readlineSync.question("Digite uma propriedade CSS: ");
  if (input.toLowerCase() === "sair") {
    break;
  }
  anwers.push(input);
}
console.log(anwers.sort());
