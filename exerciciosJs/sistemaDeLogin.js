let user = "Admin";
let senha = "1234";
let chances = 3;
let i = 0;
console.log("Login");
while(i != 1){
let tentativaUser = prompt("Digite o nome de usuário: ");
if(tentativaUser === user) {
    i++;
    while(chances > -1) {
    let tentativaSenha = prompt("Digite a senha de " + user + ":");
    if(tentativaSenha === senha) {
        console.log("Bem-vindo(a) " + user + "!");
        i = 1;
        break;
    } else {
        chances--;
        console.log("A senha não corresponde. Tentativas restantes: " + chances + ".");
        if(chances <= 0) {
            console.log("O programa parou por segurança de " + user + ".");
            break;
        }
    }
}
} else {
    console.log("Usuário não encontrado.");
    }
}
