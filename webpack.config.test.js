const path = require('path')

let _config = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: {
    'ngx-element-life': path.resolve(__dirname, 'index.ts')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader'
      }]
    }]
  }
}

module.exports = _config
