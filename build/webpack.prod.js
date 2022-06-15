// webpack.prod.js
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  module: { 
    rules: [
      // ...
      {
        test: /\.(css|less)$/, //匹配所有的 css和less 文件
        use: [
          'cache-loader',
          MiniCssExtractPlugin.loader, // 打包环境抽离css
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'), // 复制public下文件
          to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
          filter: source => {
            return !source.includes('index.html') // 忽略index.html
          }
        },
      ],
    }),
    // 抽离css插件
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css'
    }),
  ]
})