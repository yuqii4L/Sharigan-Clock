const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,  // Set the width of the window
    height: 400,  // Set the height of the window
    frame: false,  // Remove window frame
    transparent: true,  // Make the window background transparent (for a wallpaper look)
    alwaysOnTop: false,  // Keep the window on top of other windows
    fullscreen: true,
    webPreferences: {
        nodeIntegration: true
    }
  });

  win.loadFile('index.html');  // Load your HTML file
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
