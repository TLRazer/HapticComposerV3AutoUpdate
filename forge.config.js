module.exports = {
  packagerConfig: {
    afterExtract: ['./script/afterExtract.js'],
    icon: './src/assets/icons/interhaptics.ico',
    overwrite: true,
    prune: true,
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'HapticComposer',
        version: '1.1.4',
        publisher: 'Interhaptics',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/renderer/index.ejs',
              js: './src/renderer/app.tsx',
              name: 'main_window',
              preload: {
                _comment: 'Load this here so that the renderer can load electron dependency',
                js: './src/main/preload.ts',
              },
            },
            {
              html: './src/main/windows/noteEditor.html',
              js: './src/main/windows/index.tsx',
              name: 'note_editor_window',
              preload: {
                _comment: 'Load this here so that the renderer can load electron dependency',
                js: './src/noteDetailsPreload.ts',
              },
            },
          ],
        },
      },
    ],
    [
      '@timfish/forge-externals-plugin',
      {
        externals: ['ref-napi', 'ffi-napi', 'ref-array-napi', 'fswin'],
        includeDeps: true,
      },
    ],
  ],
};
