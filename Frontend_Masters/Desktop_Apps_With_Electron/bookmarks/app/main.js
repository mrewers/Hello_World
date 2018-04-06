const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    show: false
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.once('closed', () => {
    mainWindow = null;
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  require('devtron').install();
})
