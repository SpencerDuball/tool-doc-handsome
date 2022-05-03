module.exports = {
  packagerConfig: {
    name: 'SampleApp',
    dir: '../web/dist',
  },
  makers: [
    {
      name: '@electron-forge/maker-dmg',
    },
  ],
}
