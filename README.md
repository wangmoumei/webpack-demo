# webpack4教程
教程来自->[webpack 4 教程](https://blog.zfanw.com/webpack-tutorial/)

运行：```npm run dev```之后访问[http://localhost:8080/](http://localhost:8080/)


```javascript
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer');
module.exports = {
  //打包模式
  mode: 'development',
  devServer: {
    //本地调试服务器，自带watch并自动刷新浏览器
    contentBase: path.resolve(__dirname, 'dist'),
    port:8080,//端口号
    hot:true,//启动热替换，无需刷新，自动替换修改的文件
    compress:true//开发服务器是否启动gzip等压缩
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          //jsx处理
          presets: ['@babel/preset-react'],
          //js新语法处理
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          // {
          //   //load图片文件用的文件加载器,能够加载包括css、js在内的图片
          //   loader: 'file-loader',
          //   options: {}
          // },
          {
            //load图片文件用的文件加载器,比file-loader多了base64
            loader: 'url-loader',
            options: {
              limit:1024,
              //指定打包目录和图片命名规则
              name:"img/[hash:8].[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        use: [
          //css文件加载
          { loader: 'style-loader' },
          //自动把css文件添加到head的style标签
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              //自动添加css浏览器兼容前缀
              plugins: () => [autoprefixer(
                { browsers: ['iOS >= 7', 'Android >= 4.1', 
                  'last 10 Chrome versions', 'last 10 Firefox versions', 
                  'Safari >= 6', 'ie > 8'] 
                }
              )],
            },
          },
          //less文件加载
          { loader: 'less-loader' },
        ]
      }
    ]
  },
  plugins: [
    //热替换插件，devServer下hot为ture时需要加载该插件
    new webpack.HotModuleReplacementPlugin(),
    //打包前删除指定目录插件
    new CleanWebpackPlugin(['dist']),
    //自动生成 index.html
    new HtmlWebpackPlugin({
      //指定标题,优先采用template里的
      title: 'webpack 教程',
      //指定模版
      template: "index.html",
      //压缩
      minify: {
        removeAttributeQuotes: true // 移除属性的引号
      },
      //给生成的 js 文件增加hash后缀
      hash: true
    })
  ],
}

```