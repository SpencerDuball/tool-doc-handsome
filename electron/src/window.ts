import { BrowserWindow } from 'electron'
import { interceptFileProtocol } from './interceptFileProtocol'

const devUrl = 'http://localhost:8910'
const prodEntryFile = '/index.html'

interface CreateWindowProps {
  env: string // 'dev' | 'prod'
}
export const createWindow = (props: CreateWindowProps) => {
  // When true, on app launch it will focus this window in view.
  // Turn this off when developing in order to maintain focus on your IDE.
  const show = props.env === 'dev' ? false : true

  const win = new BrowserWindow({
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
