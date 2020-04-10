const moment = require('moment');
const { ipcRenderer } = require('electron');

let segundos;
let timer;
let tempo;

module.exports = {
    iniciar(elem) {
        tempo = moment.duration(elem.textContent);
        segundos = tempo.asSeconds();
        clearInterval(timer); // evita que mais de um interval seja adicionado ao timer.

        timer = setInterval(() => {
            segundos ++;
            elem.textContent = this.segundosParaTempos(segundos);
        }, 1000);
    },
    parar(curso) {
        clearInterval(timer);
        let tempoEstudado = this.segundosParaTempos(segundos);
        ipcRenderer.send('curso-parado', curso, tempoEstudado);
    },
    segundosParaTempos(segundos) {
        return moment().startOf('day').seconds(segundos).format('HH:mm:ss');
    }
}