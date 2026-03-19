console.log("Calculadora de médias:");
let notaUm = Number(prompt("Digite a primeira nota: "));
let notaDois = Number(prompt("Digite a segunda nota: "));
let notaTres = Number(prompt("Digite a última nota: "));
soma = notaUm + notaDois + notaTres;
resultado = soma / 3;
if(resultado >= 7) {
    console.log("O aluno está aprovado!");
} else if(resultado < 7 && resultado >= 5) {
    console.log("O aluno está em recuperação.");
} else {
    console.log("O aluno está reprovado.");
}
