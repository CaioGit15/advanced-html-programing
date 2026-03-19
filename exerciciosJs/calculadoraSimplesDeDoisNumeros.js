console.log("Calculadora simples de 2 números: ");
let nUm = Number(prompt("Digite o primeiro número: "));
let nDois = Number(prompt("Digite o último número: "));
console.log("Tabela de operações disponíveis:");
console.log("Para somar, digite +.");
console.log("Para subtrair, digite -.");
console.log("Para multiplicar, digite *.");
console.log("Para dividir, digite /.");
let op = prompt("Qual operação deseja realizar?\n");
if(op == "+") {
    let soma = nUm + nDois;
    console.log("A soma de " + nUm + " com " + nDois + " é igual a " + soma + "!");
} else if(op == "-") {
    let sub = nUm - nDois;
    console.log("A subtração de " + nUm + " com " + nDois + " é igual a " + sub + "!");
} else if(op == "*") {
    let multi = nUm * nDois;
    console.log("A multiplicação de " + nUm + " com " + nDois + " é igual a " + multi + "!");
} else if(op == "/") {
    let divi = nUm / nDois;
    let resto = nUm % nDois;
    console.log("A divisão de " + nUm + " com " + nDois + " é igual a " + divi + "!");
    console.log("De resto: " + resto + ".");
}
