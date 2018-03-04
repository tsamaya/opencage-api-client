const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    library: 'opencage',
    libraryTarget: 'umd',
    filename: 'opencage-api.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
