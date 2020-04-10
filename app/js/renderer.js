const { ipcRenderer } = require('electron');

const sobre = document.querySelector('#link-sobre');

sobre.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre');
});
