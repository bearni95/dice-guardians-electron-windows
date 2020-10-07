const { app, BrowserWindow, Menu, remote } = require('electron')

const serve = require('electron-serve')

Menu.setApplicationMenu(false)

require('update-electron-app')()

const loadUrl = serve({directory: 'www'})


async function createWindow () {

  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  })


  //await gitClone()



	await loadUrl(win)

  await win.loadUrl('app://-')

  // y carga el index.html de la aplicación.
  //win.loadFile('index.html')

  // Abre las herramientas de desarrollo (DevTools).
  //win.webContents.openDevTools()

}


// Este método se llamará cuando Electron haya finalizado
// la inicialización y esté preparado para crear la ventana del navegador.
// Algunas APIs pueden solamente ser usadas despues de que este evento ocurra.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// En este archivo puede incluir el resto del código del proceso principal específico
// de su aplicación. Tu también puedes ponerlos en archivos separados y requerirlos aquí.
