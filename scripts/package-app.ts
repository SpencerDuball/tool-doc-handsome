import path from "path";
import { promisify } from "util";
import { exec as _exec } from "child_process";
import fs from "fs/promises";

const exec = promisify(_exec);

const ElectronWorkspaceName = "electron";

async function packageApp() {
  // create a fresh dist of the "web" workspace
  const toFrontend = path.resolve("..", "frontend");
  await exec(
    `npx cross-env INIT_CWD=${toFrontend} yarn workspace frontend build`
  );
  await exec(
    `npx cross-env INIT_CWD=${toFrontend} yarn workspace frontend next export -o dist/`
  );

  // copy "frontend" build to the electron folder
  const frontendDist = path.resolve(__dirname, "..", "frontend", "dist");
  const electronDist = path.resolve(
    __dirname,
    "..",
    ElectronWorkspaceName,
    "dist"
  );
  await fs.cp(frontendDist, electronDist, { recursive: true });

  // build the electron main process
  await exec(`yarn workspace ${ElectronWorkspaceName} run build`);

  // run electron-forge to package the app
  await exec(
    `yarn workspace ${ElectronWorkspaceName} run electron-forge make --platform=${process.platform}`
  );
}

packageApp();
