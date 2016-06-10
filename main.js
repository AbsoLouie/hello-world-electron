const electron = require('electron')
const {app} = electron
const {BrowserWindow} = electron

let window

function createWindow () {
  window = new BrowserWindow({width: 800, height: 600})

  window.loadURL(`file://${_dirname}/index.html`)

  window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })
}

function closeApp () {
  if (process.platform !== 'darwin') {
    app.quit
  }
}

function reopenApp () {
  if (window === null) {
    createWindow()
  }
}

app.on('ready', createWindow)
app.on('window-all-closed', closeApp)
app.on('activate', reopenApp)
