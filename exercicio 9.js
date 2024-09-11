const numero = prompt("Digite um número:");
const numeroInteiro = parseInt(numero, 10);

if (isNaN(numeroInteiro) || numeroInteiro < 0) {
    console.log("Digite um número inteiro não negativo.");
} else {
    let soma = 0;
    let num = numeroInteiro;

    while (num > 0) {
        soma += num % 10;
        num = Math.floor(num / 10);
    }

    console.log("A soma dos dígitos é:", soma);
}