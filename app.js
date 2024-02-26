alert('Boas vindo ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// Comentário
if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o numero secreto (5)')
} else {
    alert('Você errou :(')
}