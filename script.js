let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria order aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
const lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 400);
    setTimeout(() => {
        element.classList.remove('selected');
     }, number - 250);
}

//checa se os botões clicados estão corretos
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        checkOrder();
        createColorElement(color).classList.remove('selected');
        
    }, 250);

    
}

//Função que retorna a cor
let createColorElement = (color) => {
    switch(color) {
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
    }
}

//função para próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função game-over

let gameOver = () => {
    alert(`Você perdeu! Score: ${score}\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];
    

    start();

}

//Inicio de jogo
let start = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo.');
    score = 0;
    
    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

start();