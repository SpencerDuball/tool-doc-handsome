import { protocol } from 'electron'
import path from 'path'

const WEB_FOLDER = 'dist'
const PROTOCOL = 'file'

export function interceptFileProtocol() {
  protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
    // strip protocol
    let url = request.url.substr(PROTOCOL.length + 1)
    console.log('first: ', request.url)

    // build complete path for node require function
    url = path.normalize(path.join(__dirname, '..', WEB_FOLDER, url))
    console.log('second: ', url)

    callback({ path: url })
  })
}
