const moment = require('moment');

let segundos;
let timer;

module.exports = {
    iniciar(elem) {
        let tempo = moment.duration(elem.textContent);
        segundos = tempo.asSeconds();
        clearInterval(timer); // evita que mais de um interval seja adicionado ao timer.

        timer = setInterval(() => {
            segundos ++;
            tempo = this.segundosParaTempos(segundos);
            elem.textContent = tempo;
        }, 1000);
    },
    segundosParaTempos(segundos) {
        return moment().startOf('day').seconds(segundos).format('HH:mm:ss');
    }
}