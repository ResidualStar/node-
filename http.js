// 所有的HTML文件放到views目录中
// 所有的静态文件(css/js...)放至public目录中

// 服务器 对数据进行操控  接受请求 处理请求 反馈信息(返回响应)
// 启动服务器 在命令行输入文件目录
// 关闭服务器 关闭命令行 或者 ctrl+c
// 若文件被修改 需要重启服务器
// 响应内容必须是字符串 或者 二进制数据

// 使用node构建一个web服务器
// 核心模块 http 创建编写服务器

let http = require('http') // 加载核心模块

let server = http.createServer() // 创建一个web服务器 返回一个实例 返回了一个服务器实例

server.on('request', function(Request, Response) {
    // 注册request请求事件 request不可更换 当客户端发送请求时会自动触发request请求事件 执行回调函数

    // Request 请求对象
    // -----------------用来获取客户端的一些请求信息 例如 请求路径
    // Request.url 当前客户端请求的路径 端口号后面的东西 通过不同路径返回客户端不同信息

    // Response 响应对象  
    // -----------------给客户端发送响应信息 
    Response.write('<h1>hello</h1>') // 可以用来发送响应数据 可以使用多次  
    Response.setHeader('Content-Type', 'text/plain;charset=utf-8') // 默认 普通的文本 可解决乱码 用来告诉浏览器 编码 
    Response.setHeader('Content-Type', 'text/html;charset=utf-8') // 可解析html标签  可解决乱码 
    Response.write('王雨欣') // 服务器默认发送utf-8数据 浏览器不知晓就会默认操作系统默认编码解析
    Response.end() // 最后end结束响应 否则客户端一直等待
    console.log('收到请求啦 请求路径为：' + Request.url)
})

server.listen(3000, function() {
    // 绑定端口号 启动服务器 3000就是端口号
    console.log('服务器启动成功,可以通过 http://127.0.0.1:3000/来进行访问')
        // 当访问 http://127.0.0.1:3000/时就是向服务器发送请求了 
})