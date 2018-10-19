var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
console.log('webpack is loading-----')
module.exports = {
  // target: 'electron-renderer',
  entry: {
    app: './src/index.js',
    theme: './src/style/index.less',
    icon: './src/style/antd/icon.less',
    // skin: './src/static/color.less'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
            limit: 81920
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 50000,
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 50000,
          name: 'audio/[name].[hash:8].[ext]',
        },
      },
      // {
      //     test: /\.less$/,
      //     use: ['style-loader','css-loader','less-loader']
      // },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: '/dist/',
    // publicPath: "/assets/",
    port: 9001,
    hot: true,
    host: '0.0.0.0'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new copyWebpackPlugin([{//复制static到dist
      from: __dirname + '/src/static',//打包的静态资源目录地址
      to: './' //打包到dist下面的static
    }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new copyWebpackPlugin([{//复制static到dist
      from: __dirname + '/src/static',//打包的静态资源目录地址
      to: './static' //打包到dist下面的static
    }]),
    new ExtractTextPlugin('[name].css'),
  ]
}