console.log("Contador de números positivos:");
let i = 0;
let posi = 0;
while(i !== 5) {
    i++;
    let num = Number(prompt("Digite um número: "));
    if(num >= 0) {
        posi++;
    }
}
    console.log("A quantidade de números positivos foi: " + posi + ".");
