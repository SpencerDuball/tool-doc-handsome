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
  // When true, on app launch it will focus this window in view.
  // Turn this off when developing in order to maintain focus on your IDE.
  const show = props.env === 'dev' ? false : true
  console.log(__dirname, 'preload.js')

  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    width: 1280,
    height: 900,
    show,
  })

  // load the frontend
  if (props.env === 'dev') {
    win.loadURL(devUrl)
    win.showInactive()
  } else {
    interceptFileProtocol()
    win.loadFile(prodEntryFile)
  }

  return win
}
