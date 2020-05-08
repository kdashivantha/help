const path = require('path');

module.exports = {
  entry: './docs/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};