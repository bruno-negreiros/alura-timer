const { ipcRenderer } = require('electron');

let sobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let images = ['./img/play-button.svg', './img/stop-button.svg'];

sobre.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre');
});

botaoPlay.addEventListener('click', function() {
    images.reverse();
    botaoPlay.src = images[0];
});
