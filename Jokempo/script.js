// Obtém os elementos HTML que representam a pontuação humana e da máquina, e o resultado do jogo.
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const result = document.querySelector(".result");

// Variáveis para armazenar a pontuação humana e da máquina, e o número da rodada atual.
let humanScoreNumber = 0;
let machineScoreNumber = 0;
let currentRound = 0;

// Opções de jogo para pedra, papel e tesoura.
const GAME_OPTION = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

// Funções para reproduzir sons de vitória, derrota e empate.
const playWinSound = () => {
    const winSound = new Audio('win.mp3');
    winSound.play();
}

const playLoseSound = () => {
    const loseSound = new Audio('lose.mp3');
    loseSound.play();
}

const playTiedSound = () => {
    const tiedSound = new Audio('tied.mp3');
    tiedSound.play();
}

// Obtém o emoji correspondente para uma opção de jogo.
const getEmoji = (choice) => {
    switch (choice) {
        case GAME_OPTION.ROCK:
            return "\u270A";
        case GAME_OPTION.PAPER:
            return "\u270B";
        case GAME_OPTION.SCISSORS:
            return "\u270C";
        default:
            return "";
    }
}

// Realiza uma rodada do jogo entre jogador humano e máquina.
const playTheGame = (human, machine) => {
    const humanEmoji = getEmoji(human);
    const machineEmoji = getEmoji(machine);

    // Verifica o resultado da rodada e atualiza a pontuação e exibe o resultado.
    if (human === machine) {
        result.textContent = `Deu Empate! ${humanEmoji} vs ${machineEmoji}`;
        playTiedSound();
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.textContent = humanScoreNumber;
        result.textContent = `Você Ganhou! ${humanEmoji} vs ${machineEmoji}`;
        playWinSound();
    } else {
        machineScoreNumber++;
        machineScore.textContent = machineScoreNumber;
        result.textContent = `Você Perdeu! ${humanEmoji} vs ${machineEmoji}`;
        playLoseSound();
    }

    // Incrementa o número da rodada e verifica se o jogo acabou.
    currentRound++;
    checkGameOver();
}

// Função para o jogador humano jogar uma opção.
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

// Função para a máquina escolher uma opção aleatória.
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Verifica se o jogo acabou e redireciona para a página do vencedor ou perdedor se necessário.
const checkGameOver = () => {
    const maxScore = 10;
    if (humanScoreNumber >= maxScore || machineScoreNumber >= maxScore) {
        const winner = checkWinner();
        const loser = checkLoser();

        // Salva os dados do jogo na sessionStorage
        const scoreInfo = `${winner} ganhou com ${winner === "Humano" ? humanScoreNumber : machineScoreNumber} pontos. Pontuação do perdedor: ${loser === "Humano" ? humanScoreNumber : machineScoreNumber} pontos.`;

        sessionStorage.setItem('winner', winner);
        sessionStorage.setItem('loser', loser);
        sessionStorage.setItem('scoreInfo', scoreInfo);
        sessionStorage.setItem('humanScore', humanScoreNumber);
        sessionStorage.setItem('machineScore', machineScoreNumber);

        // Redireciona para a página de fim de jogo
        window.location.href = "end-game.html";

        // Reseta o jogo
        resetGame();
    }
}

// Função para verificar o vencedor do jogo
const checkWinner = () => {
    return humanScoreNumber > machineScoreNumber ? "Humano" : "Máquina";
}

// Função para verificar o perdedor do jogo
const checkLoser = () => {
    return humanScoreNumber < machineScoreNumber ? "Humano" : "Máquina";
}

// Função para redefinir o jogo
const resetGame = () => {
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    currentRound = 0;
    humanScore.textContent = humanScoreNumber;
    machineScore.textContent = machineScoreNumber;
    result.textContent = "";
}
