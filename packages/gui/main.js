const { app, BrowserWindow } = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true, // 是否显示顶部导航栏
  });

  // win.loadFile("./src/index.html");
  win.loadURL("http://127.0.0.1:3000");
  win.webContents.openDevTools()
}
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
