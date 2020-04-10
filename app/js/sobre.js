const { ipcRenderer } = require('electron');

const linkFechar = document.querySelector('#link-fechar');

linkFechar.addEventListener('click', function() {
    ipcRenderer.send('fechar-janela-sobre');
});
