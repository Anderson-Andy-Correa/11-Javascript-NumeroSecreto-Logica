alert('Boas vindo ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    tentativas ++;

    // Comentário
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        };
    };
};

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)
