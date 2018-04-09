import { app, BrowserWindow, ipcMain } from 'electron';
import { client } from 'electron-connect';
import * as path from 'path';

let applicationRef: Electron.BrowserWindow = null;
let child, pouchServer;

const debugMode = false;

const mainWindowSettings: Electron.BrowserWindowConstructorOptions = {
    width: 1200,
    height: 700,
    frame: true,
    resizable: false
};

function initMainListener() {
    ipcMain.on('ELECTRON_BRIDGE_HOST', (event, msg) => {
        console.log('msg received', msg);
        if (msg === 'ping') {
            event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
        }
    });
}

function createWindow() {
    applicationRef = new BrowserWindow(mainWindowSettings);
    applicationRef.loadURL(`file:///${__dirname}/index.html`);
    if (debugMode) {
        // Open the DevTools.
        applicationRef.webContents.openDevTools();
    }
    applicationRef.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        applicationRef = null;
    });

    initMainListener();

    client.create(applicationRef);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        // TODO perhaps hook this and wait for message bus before quitting?
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (applicationRef === null) {
        createWindow();
    }
});

ipcMain.on('open-modal', function(event, arg) {
  let code = `document.getElementById('overlay').className='modal-open'`;
  applicationRef.webContents.executeJavaScript(code);

  // create modal window
  child = new BrowserWindow({
    parent: applicationRef,
    width: 800,
    height: 500,
    modal: true,
    show: false
  });

  child.loadURL('file://' + __dirname + '/index.html#' + arg.location);
  child.show();
  child.once('ready-to-show', () => {

  })
});

ipcMain.on('close-modal', () => {
  let code = `document.getElementById('overlay').classList.remove('modal-open')`;
  applicationRef.webContents.executeJavaScript(code);

  child.hide();
});

ipcMain.on('goto-page', function(event, arg) {
  applicationRef.loadURL('file://' + __dirname + '/index.html#' + arg.location);
});
