var path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
