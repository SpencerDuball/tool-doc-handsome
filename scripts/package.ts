import path from 'path'
import { promisify } from 'util'
import { exec as _exec } from 'child_process'
import fs from "fs/promises"

const exec = promisify(_exec)

export default async () => {
  // create a fresh build of the "web" workspace
  await exec('yarn rw build web')

  // copy this build to the electron folder
  const webDist = path.resolve(__dirname, "..", "web", "dist")
  const electronDist = path.resolve(__dirname, "..", "electron", "dist");
  await fs.cp(webDist, electronDist, { recursive: true })

  // run electron-forge to package the app
  await exec('yarn workspace electron run make')
}
