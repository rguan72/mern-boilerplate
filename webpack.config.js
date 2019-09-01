'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: './client/src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist'),
        publicPath: '/'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HTMLPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_module/,
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
              ],
          },
        ],
    },
}