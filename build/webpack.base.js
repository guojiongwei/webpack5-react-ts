// webpack.base.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // 入口文件
  entry: path.resolve(__dirname, '../src/index.tsx'),
  // 打包文件出口
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // js文件的名称
    chunkFilename: 'static/js/[name].[chunkhash:8].js', // 打包后的放置好路径和文件名称
    path: path.resolve(__dirname, '../dist'), // 打包的出口文件夹路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件， webpack5内置了。
    publicPath: '/', // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname,'../src'),
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 启用缓存
              presets: [
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
            options: {
              publicPath: '../'
            }
          },
          // 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [ 'postrion-preset-env' ]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/, //匹配所有的 less 文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
            options: {
              publicPath: '../'
            }
          },
          // 'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: 'static/images/[name].[ext]',
            limit: 10 * 1024
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true
    }),
    new MiniCssExtractPlugin({ // 添加插件
      filename: 'static/css/[name].[contenthash:8].css'
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
}