const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'opencage',
    filename: 'opencage-api.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
