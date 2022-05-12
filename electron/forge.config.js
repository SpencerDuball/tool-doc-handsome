const path = require("path");

const appName = "MyApp";
const appCopyright = `Copyright (c) 2022 ${appName}`;

const getIconPath = () => {
  if (process.platform === "win32")
    return path.join(__dirname, "dist", "icon.ico");
  else if (process.platform === "darwin")
    return path.join(__dirname, "dist", "icon.icns");
  // Linux: this option is not supported, as the dock/window list icon is set via the icon option
  // in the BrowserWindow constructor. Please note that you need to use a PNG, and not the macOS
  // or Windows icon formats, in order for it to show up in the dock/window list. Setting the icon
  // in the file manager is not currently supported.
  else return undefined;
};

// For info about configuring electron-forge:
// https://www.electronforge.io/configuration
const config = {
  // For electron-packager configuration options visit:
  // https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html
  packagerConfig: {
    name: appName,
    appCopyright,
    // icon: getIconPath(),
    // ignore: []
  },
  makers: [
    // For @electron-forge/maker-dmg configuration:
    // https://js.electronforge.io/maker/dmg/interfaces/makerdmgconfig
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      congig: {
        // icon: getIconPath(),
        name: appName,
      },
    },
    // For @electron-forge/maker-squirrel configuration:
    // https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
    {
      name: "@electron-forge/maker-squirrel",
      platforms: ["win32"],
      config: {
        authors: ["Some Person"],
        copyright: appCopyright,
        description: "An app that does very app-like things.",
        // iconUrl: getIconPath(),
      },
    },
  ],
};

module.exports = config;
