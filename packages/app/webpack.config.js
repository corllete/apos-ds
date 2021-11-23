const path = require('path');
// const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scssInclude = [
  './src/scss',
  // 1. @include atoms/buttons/style -> aposRoot/modules/ui/views/atoms/buttons/style.scss
  './modules/myui/views',
  // 2. @use "@material/button/styles" -> aposRoot/node_modules/@material/button/styles.scss
  './node_modules'
];
const mode = process.env.NODE_ENV || 'development';
const publicOutputPath = 'http://localhost:9002/wp/';

module.exports = {
  mode,
  stats: 'minimal',
  entry: [ './src/index.js', './src/index.scss' ],
  // In production, always be IE11 compatible. In dev, be IE11 compatible
  // if IE11=1 is in the environment, as this currently breaks hot reload:
  // https://github.com/webpack/webpack-dev-server/issues/2758
  target: process.env.IE11 ? 'es5' : (mode === 'development') ? 'web' : 'es5',
  output: {
    ...((mode === 'development')
      ? {
        filename: 'site.js',
        publicPath: publicOutputPath
      }
      : {
        path: path.resolve(
          __dirname, 'modules/asset/ui/public'
        ),
        filename: 'site.js'
      })
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
            options: {
              implementation: require('sass'),
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
    // new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'site.css'
    })
  ],
  ...((mode === 'development')
    ? {
      devServer: {
        hot: true,
        // inline: true,
        host: '0.0.0.0',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        static: {
          publicPath: '/wp/'
        },
        port: 9002,
        allowedHosts: [
          '.localhost'
        ],
        proxy: {
          '/': 'http://localhost:3000'
        }
      }
    }
    : {})
};
