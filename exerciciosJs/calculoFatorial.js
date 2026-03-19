let resultado = 1;
console.log("Calculo de fatorial:");
let numero = Number(prompt("Digite um número: "));
for (let i = 1; i <= numero; i++) {
    resultado *= i; 
}
console.log("O fatorial de " + numero + " é: " + resultado + ".");
