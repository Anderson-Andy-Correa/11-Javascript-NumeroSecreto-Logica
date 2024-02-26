alert('Boas vindo ao jogo do número secreto!');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    tentativas ++;

    // Comentário
    if (chute == numeroSecreto) {
        console.log(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`)
    } else {
        if (chute < numeroSecreto) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        };
    };
};
