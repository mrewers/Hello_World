const { app, BrowserWindow, dialog } = require('electron');
const fs = require('fs');

let mainWindow = null;
const windows = new Set();

app.on('ready', () => {
  createWindow();
});

const createWindow = exports.createWindow = () => {
  let newWindow = new BrowserWindow({ show: false });
  windows.add(newWindow);

  newWindow.loadURL(`file://${__dirname}/index.html`);

  newWindow.once('ready-to-show', () => {
    newWindow.show();
  });

  newWindow.on('closed', () => {
    windows.delete(newWindow);
    newWindow = null;
  });
}

const getFileFromUserSelection = exports.getFileFromUserSelection = (targetWindow) => {
  const files = dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'Text Files', extensions: ['txt', 'text'] },
      { name: 'Markdown Files', extensions: ['md', 'markdown'] },
    ]
  });

  if (!files) return;

  return files[0];
};

const openFile = exports.openFile = (targetWindow, filePath) => {
  const file = filePath || getFileFromUserSelection();
  const content = fs.readFileSync(file).toString();
  targetWindow.webContents.send('file-opened', file, content);
  targetWindow.setTitle(`${file} | Fire Sale`);
  targetWindow.setRepresentedFilename(file);
}
