const { ipcRenderer } = require('electron');
const timer = require('./timer');
const data = require('../../data');

let sobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');
let curso = document.querySelector('.curso');
let images = ['./img/play-button.svg', './img/stop-button.svg'];
let play;

window.onload = function() {
    data.pegaDados(curso.textContent)
    .then((dados) => {
        tempo.textContent = dados.tempo;
    })
    .catch(err => console.log(err));
};

sobre.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre');
});

botaoPlay.addEventListener('click', function() {
    images.reverse();
    botaoPlay.src = images[0];

    if(play) {
        timer.parar(curso.textContent);
        play = false;
    } else {
        timer.iniciar(tempo)
        play = true;
    }
});
