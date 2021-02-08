const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/main.html'),
      filename: 'index.html',
      showErrors: true,
      inject: 'head',
      chunks: ['main']
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.html$/i, loader: 'html-loader' },
      { test: /\.md$/, use: ['html-loader', 'markdown-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
};