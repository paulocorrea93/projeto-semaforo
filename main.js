const semaforo = document.getElementById ('img');
const botoes = document.getElementById ('botoes');
let sinalIndex = 0;
let intervalo = null;

const mudarSinal = (event) => {
    paradaAuto ();
    ligarSemaforo[event.target.id]();
}

const proxCor = () => sinalIndex = sinalIndex < 2 ? ++sinalIndex : 0;

const mudarAuto = () => {
    const sinais = ['vermelho', 'amarelo', 'verde']
    const sinal = sinais [sinalIndex];
    ligarSemaforo[sinal]();
    proxCor();
}

const paradaAuto = () => {
    clearInterval(intervalo);
}

const ligarSemaforo = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => intervalo = setInterval(mudarAuto, 1000)
}

botoes.addEventListener('click', mudarSinal)