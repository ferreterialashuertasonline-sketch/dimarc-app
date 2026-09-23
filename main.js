const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 860,
    minHeight: 560,
    title: 'DIMARC App Comercial',
    webPreferences: {
      contextIsolation: true
    }
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'www-desktop', 'index.html'));

  // Los enlaces mailto: (botón "Enviar pedido") deben abrir el programa
  // de correo del sistema, no intentar cargarse dentro de la propia app.
  win.webContents.on('will-navigate', (event, url) => {
    if(url.startsWith('mailto:')){
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
