import path from 'path'
import { BrowserWindow } from 'electron'
import { interceptFileProtocol } from './interceptFileProtocol'

const devUrl = 'http://localhost:8910'
const prodEntryFile = '/index.html'

interface CreateWindowProps {
  env: string // 'dev' | 'prod'
}

/**
 * Creates the main application window for us to interact with Electron.
 *
 * @param props
 * @returns The window
 */
export const createWindow = (props: CreateWindowProps) => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    width: 1280,
    height: 900,
    show: false,
  })

  // load the frontend
  if (props.env === 'dev') {
    win.loadURL(devUrl)
    win.showInactive()
  } else {
    interceptFileProtocol()
    win.loadFile(prodEntryFile)
    win.on('ready-to-show', () => {
      win.show()
      win.focus()
    })
  }

  return win
}
