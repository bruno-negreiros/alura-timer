const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
    console.log('Aplicação Iniciada');
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
    app.quit();
});

let sobreWindow;
ipcMain.on('abrir-janela-sobre', () => {
    if (!sobreWindow) {
        sobreWindow = new BrowserWindow(
            { 
                width: 300,
                height: 220,
                alwaysOnTop: true, // a janela sempra ficará acima de outras janelas.
                frame: false, // barra com opções de maximinizar, minimizar e fechar.
            });

        sobreWindow.on('closed', () => {
            sobreWindow = null; // 'Ressuscita' a variável sobreWindow, pois ao fechar a janela
                                // a mesma é destruída, já que ela representa a janela.
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close();
});
