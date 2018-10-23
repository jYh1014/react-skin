// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require("path")
const electron = require('electron');
const Menu = electron.Menu;
const Tray = electron.Tray
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow ()  {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 900, height: 650})

  // and load the index.html of the app.
//   mainWindow.loadURL(
//     path.join(__dirname, './dist/index.html') 
// )
mainWindow.loadURL(`http://localhost:9001/index.html`)

var trayMenuTemplate = [
  {
      label: '设置',
      click: function () {} //打开相应页面
  },
  {
      label: '帮助',
      click: function () {}
  },
  {
      label: '关于',
      click: function () {}
  },
  {
      label: '退出',
       click: function () {
        app.quit();
           app.quit();//因为程序设定关闭为最小化，所以调用两次关闭，防止最大化时一次不能关闭的情况
      }
  }
]
//系统托盘图标目录
appTray = new Tray(path.join(__dirname, 'src/img/a.jpg'));//app.ico是app目录下的ico文件
//图标的上下文菜单
const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
 
//设置此托盘图标的悬停提示内容
appTray.setToolTip('我的托盘图标');

//设置此图标的上下文菜单
appTray.setContextMenu(contextMenu);
//单击右下角小图标显示应用
appTray.on('click',function(){
    win.show();
})
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
