const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true, // 預設直接全螢幕
    autoHideMenuBar: true, // 隱藏頂部選單
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 讀取你的 index.html
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});