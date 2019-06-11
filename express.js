// 安装框架  npm  install express --save
// 1. 创建文件夹  mkdir moban
// 2. 切入文件
// 3. 添加说明书  npm init -y 一次性添加
// 4. 添加包 npm i -S express 
// 不同时添加不同的包 只会有一个目录 nide_modules文件 自动归纳进文件中 

// 加载第三方模块 引包
let express = require('express')

let sever = express() // 相当于 require('http').createServer 创建返回服务器应用程序

// 公开指定目录 原自己写的需要读取文件 这里自动公开
sever.use('', express.static('')) // 第二个路径是要暴露的路径 第一个可以自定义  第一个可以不写  访问的时候省略第一个参数即可 

// 当服务器收到get请求 / 时触发回调函数  客户端请求默认为get请求
sever
    .get('/', function(req, res) {
        // req.query  获取查询字符串(请求)参数  返回一个对象 参数存储在对象中 
        res.send("hello world") // express框架 已经解决乱码问题  可解析HTNL结构 
    })
    .get('/table', function(req, res) {
        // 可以链式编程   每个都是路由 
        res.send("hello world")
    })

sever.listen(3000, function() {
    // 绑定端口号 启动服务器 3000就是端口号
    console.log(" running...");

})