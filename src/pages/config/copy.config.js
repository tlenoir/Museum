

//custom copy.config
//add "config": {"ionic_copy": "./src/pages/config/copy.config.js" to package.json


// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
// module.exports = {
//     copyAssets: {
//       src: ['{{SRC}}/assets/**/*'],
//       dest: '{{WWW}}/assets'
//     },
//     copyIndexContent: {
//       src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
//       dest: '{{WWW}}'
//     },
//     copyFonts: {
//       src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
//       dest: '{{WWW}}/assets/fonts'
//     },
//     copyPolyfills: {
//       src: [`{{ROOT}}/node_modules/ionic-angular/polyfills/${process.env.IONIC_POLYFILL_FILE_NAME}`],
//       dest: '{{BUILD}}'
//     },
//     copySwToolbox: {
//       src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
//       dest: '{{BUILD}}'
//     }
//   }

module.exports = {
    data_bdd: {
        src: ['{{SRC}}/providers/data/data_db.json'],
        dest: '{{BUILD}}'
    }
}