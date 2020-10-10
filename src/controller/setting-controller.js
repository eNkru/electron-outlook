const path = require('path');
const { BrowserWindow } = require('electron');

class SettingsWindow {

    constructor() {
        this.init();
    }

    init() {
        this.window = new BrowserWindow({
            width: 500,
            height: 700,
            autoHideMenuBar: true,
            show: false,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        });
        // this.window.webContents.openDevTools();
        this.window.loadURL(`file://${path.join(__dirname, '../view/setting.html')}`);
        this.window.on('close', (e) => {
            if (this.window.isVisible()) {
                e.preventDefault();
                this.window.hide();
            }
        });
    }

    show() {
        this.window.show();
    }
}

module.exports = SettingsWindow;