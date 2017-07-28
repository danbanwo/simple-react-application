var path = require('path');
 
module.exports = {
  entry: './entry.js',
  output: { 
      path: path.join(__dirname, '/public'), 
      filename: 'bundle.js' 
    },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
        presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/, 
        loader: 'json' 
      }
    ]
  }
};