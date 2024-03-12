const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const result = document.querySelector(".result");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Enumerações
const GAME_OPTION = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

// Função para tocar som de clique
const sound = new Audio('click.mp3');

// Função para tocar som de vitória
const playWinSound = () => {
    const winSound = new Audio('win.mp3');
    winSound.play();
}

// Função para tocar som de derrota
const playLoseSound = () => {
    const loseSound = new Audio('lose.mp3');
    loseSound.play();
}

// Função para tocar som de empate
const playTiedSound = () => {
    const tiedSound = new Audio('tied.mp3');
    tiedSound.play();
}

// Função para jogar como humano
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

// Função para jogar como máquina
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Função para jogar o jogo
const playTheGame = (human, machine) => {
    console.log('Humano:' + human + "Maquina:" + machine);

    if (human === machine) {
        result.innerHTML = "Deu Empate!";
        playTiedSound();
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você Ganhou!";
        playWinSound();
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você Perdeu!";
        playLoseSound();
    }
}

// Adicionar manipulador de eventos de clique para todos os botões
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // Tocar som de clique
        sound.play();
    });
});

// Não se usa "change" para <p>, por isso vamos monitorar as mudanças de score diretamente
const observeScoreChanges = () => {
    const scoreObserver = new MutationObserver(mutationsList => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && (mutation.target === humanScore || mutation.target === machineScore)) {
                if (humanScoreNumber !== 0 || machineScoreNumber !== 0) { // Evitar tocar som ao iniciar o jogo
                    if (humanScoreNumber > machineScoreNumber) {
                        playWinSound();
                    } else if (humanScoreNumber < machineScoreNumber) {
                        playLoseSound();
                    } else {
                        playTiedSound();
                    }
                }
            }
        }
    });

    scoreObserver.observe(document.querySelector("#scores"), { attributes: false, childList: true, subtree: true });
};

observeScoreChanges();