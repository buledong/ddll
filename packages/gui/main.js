"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var h5 = require("@ddll/h5");
function createWindow() {
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600
    });
    // win.loadFile("./src/index.html");
    h5.run().then(function (viteConfig) {
        var vConfig = viteConfig;
        win.loadURL("http://localhost:" + vConfig.config.server.port);
        win.webContents.openDevTools();
    });
}
electron_1.app.whenReady().then(function () {
    createWindow();
});
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
