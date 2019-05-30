const {
  override,
  fixBabelImports,
  removeModuleScopePlugin,
  overrideDevServer,
  watchAll
} = require('customize-cra')
// module.exports = override(
// 	fixBabelImports('import', {
// 		libraryName: 'antd',
// 		libraryDirectory: 'es',
// 		style: 'css'
// 	})
// )
module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    removeModuleScopePlugin()
  ),
  jest: config => {
    config.testMatch = [ '<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}' ]
    return config
  },
  paths: (paths, env) => {
    paths.appSrc = paths.appSrc.replace('src', 'example')
    paths.appIndexJs = paths.appIndexJs.replace('src', 'example').replace('.ts', '.tsx')
    return paths
  },
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
}
