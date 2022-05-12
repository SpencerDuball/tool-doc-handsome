import path from "path";
import { promisify } from "util";
import { exec as _exec } from "child_process";
import fs from "fs/promises";

const exec = promisify(_exec);

async function dryRunApp() {
  await exec("yarn workspace electron run electron-forge start");
}

dryRunApp();
