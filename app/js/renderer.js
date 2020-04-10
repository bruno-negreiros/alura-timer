const { ipcRenderer } = require('electron');
const timer = require('./timer');

let sobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');
let images = ['./img/play-button.svg', './img/stop-button.svg'];

sobre.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre');
});

botaoPlay.addEventListener('click', function() {
    images.reverse();
    botaoPlay.src = images[0];
    timer.iniciar(tempo);
});
