let fs = require('fs')
    // fs.readFile('no.js', function(error, data) {
    //         console.log(data.toString());
    //     })
    // console.log(111)
    // 读取文件为异步操作(异步API) 当同时读取多个文件时 读取完成的先后顺序不能确定 
    // 读取文件内部为顺序解析  
    // 若想固定先后顺序 通过回调嵌套方法 回调地狱

// es6  promise API 构造函数
// 创建promise容器 容器内存放异步任务 
let p1 = new Promise(function(res, rej) {
    fs.readFile('./1.js', 'utf8', function(err, data) { // 默认pending等待
        if (err) {
            // 容器内任务失败   
            rej(err) // 容器pending状态变为rej 失败
        } else {
            // 成功 
            res(data) // 容器pending状态变为rej 成功
        }
    })
})

let p2 = new Promise(function(res, rej) {
    fs.readFile('./1.js', 'utf8', function(err, data) { // 默认pending等待
        if (err) {
            // 容器内任务失败
            rej(err) // 容器pending状态变为rej 失败
        } else {
            // 成功 
            res(data) // 容器pending状态变为rej 成功
        }
    })
})

let p3 = new Promise(function(res, rej) {
    fs.readFile('./1.js', 'utf8', function(err, data) { // 默认pending等待
        if (err) {
            // 容器内任务失败
            rej(err) // 容器pending状态变为rej 失败
        } else {
            // 成功 
            res(data) // 容器pending状态变为rej 成功
        }
    })
})


p1.then(function(data) { // 当p1成功后 就是res(data)  let res = function(data){}
    console.log(data);
    return p2
}, function(err) { // 当p1失败后 就是rej(err)  let rej = function(err){}

}).then(function(data) { // 当上一个参数return一个实例时 第一个参数为该实例的data
    console.log(data);
    return p3
}).then(function(data) {
    console.log(data);
})

// 封装实例
function file(file) {
    return new Promise(function(res, rej) {
        fs.readFile(file, 'utf8', function(err, data) { // 默认pending等待
            if (err) {
                // 容器内任务失败
                rej(err) // 容器pending状态变为rej 失败
            } else {
                // 成功 
                res(data) // 容器pending状态变为rej 成功
            }
        })
    })

}