const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scssInclude = [ './node_modules', './src/scss' ];
const mode = process.env.NODE_ENV || 'development';
module.exports = {
  mode,
  entry: './src/index.js',
  // In production, always be IE11 compatible. In dev, be IE11 compatible
  // if IE11=1 is in the environment, as this currently breaks hot reload:
  // https://github.com/webpack/webpack-dev-server/issues/2758
  target: process.env.IE11 ? 'es5' : (mode === 'development') ? 'web' : 'es5',
  output: {
    path: path.resolve(__dirname, 'modules/asset/ui/public'),
    filename: 'site.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env' ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            // Because of this https://github.com/webpack-contrib/sass-loader/issues/822
            options: {
              implementation: require('sass'),
              webpackImporter: false,
              sassOptions: {
                includePaths: scssInclude
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'site.css'
    })
  ]
};
