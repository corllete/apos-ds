const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const modulePath = './modules/@corllete/apos-ds-page-type';
const dist = mode === 'production' ? '/dist' : '';

const paths = {
  jsIn: './assets/js/app.js',
  jsOut: `ui${dist}/js/bundle.js`,
  cssIn: './assets/scss/app.scss',
  cssOut: `ui${dist}/css/bundle.css`,
  scssInclude: [ './node_modules', path.join(__dirname, modulePath, 'assets/scss') ]
};

module.exports = [ {
  mode,
  stats: 'minimal',
  target: (mode === 'development') ? 'web' : 'es5',
  context: path.join(__dirname, modulePath),
  entry: [
    paths.jsIn,
    paths.cssIn
  ],
  output: {
    path: path.join(__dirname, modulePath),
    filename: paths.jsOut
  },
  watchOptions: {
    ignored: [ 'node_modules/**' ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: paths.cssOut
            }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [ autoprefixer() ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              // webpackImporter: false,
              sassOptions: {
                includePaths: paths.scssInclude
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceType: 'module',
              babelrc: false,
              presets: [ '@babel/preset-env' ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/css/preview.css',
          to: `ui${dist}/css/preview.css`,
          toType: 'file'
        },
        {
          from: 'assets/js/preview.js',
          to: `ui${dist}/js/preview.js`,
          toType: 'file'
        },
        {
          from: 'assets/js/lib/highlight.common.min.js',
          to: `ui${dist}/js/highlight.common.min.js`,
          toType: 'file'
        }
      ]
    })
  ]
} ];
