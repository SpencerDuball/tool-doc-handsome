import { protocol } from 'electron'
import path from 'path'

const WEB_FOLDER = 'dist'
const PROTOCOL = 'file'

/**
 * Transforms the path that would be served from a web server to a path useable by
 * Electron coming from the filesystem.
 *
 * In a traditional web server all of our files will be served from a root directory
 * typically known as the /public directory. Since Redwood is a web framework it assumes
 * our files will follow this format. We need to change this in order for Electron to
 * find our files.
 *
 * @example "/index.html" -> "file://the/path/to/our/index.html"
 */
export function interceptFileProtocol() {
  protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
    // remove the protocol: file:///index.html -> /index.html
    const regex = new RegExp(`^${PROTOCOL}(://)?`)
    let url = request.url.replace(regex, '')

    // complete the filesystem path: /index.html -> /the/path/to/our/index.html
    const rootDir = path.join(__dirname, '..')
    url = path.normalize(path.join(rootDir, WEB_FOLDER, url))

    callback({ path: url })
  })
}
