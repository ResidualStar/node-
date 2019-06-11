// 安装  
// npm init -y
// npm i mysql

// 导入mql文件
let mysql = require('mysql')

// 创建连接
let cont = mysql.createConnection({
    host: '127.0.0.1', // 主机名
    user: 'root', // 用户名
    password: 'root', // 密码 
    database: 'yuxx' // 数据库名
})

// 连接数据库
cont.connect()

// 执行数据操作 // sql语句
cont.query('select * from itable', function(error, results, fields) {
    // results 获取sql语句获取的数据 数据库的每一行数据存放在数组内的每一个对象中
    // fields数据库的相关信息 存在数组内的第一个对象中
    console.log(results[0].id, fields);

})

// 关闭连接
cont.end()