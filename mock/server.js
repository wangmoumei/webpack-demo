var proxy = require('http-proxy-middleware');
var express = require('express');
var app = express();
var options = {
  target: 'http://localhost:8080', // 目标主机
  changeOrigin: true,               // 需要虚拟主机站点
};
var exampleProxy = proxy(options);  //开启代理功能，并加载配置
app.use('/', exampleProxy);//对地址为’/‘的请求全部转发

var server = app.listen(3001, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})