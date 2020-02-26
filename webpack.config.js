const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    bundle: ["./main.js", "./src/angular/reactDirective.js"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif|css)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};