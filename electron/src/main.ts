import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 1280,
//     height: 900,
//     show: false,
//   })

//   win.loadURL('http://localhost:8910')

//   win.showInactive()
// }
const env = process.env.NODE_ENV === undefined ? 'prod' : process.env.NODE_ENV

app.whenReady().then(() => {
  createWindow({ env })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow({ env })
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
