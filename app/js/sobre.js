const { ipcRenderer, shell } = require('electron');
const process = require('process');

let versaoElectron = document.querySelector('#versao-electron');
let linkFechar = document.querySelector('#link-fechar');
let linkGithub = document.querySelector('#link-github');

window.onload = function() {
    versaoElectron.textContent = process.versions.electron;
};

linkFechar.addEventListener('click', function() {
    ipcRenderer.send('fechar-janela-sobre');
});

linkGithub.addEventListener('click', function() {
    shell.openExternal('https://github.com/bruno-negreiros');
});
