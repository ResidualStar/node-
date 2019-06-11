// npm i mongoose 

// 连接数据库
const mongoose = require('mongoose'); // 引包 

const Schema = mongoose.Schema // 获取模型 

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }); // 连接名为test数据库

mongoose.Promise = global.Promise;

const Cat = mongoose.model('Cat', { name: String }); // 设计表Cat Cat内有name必须为字符串

const kitty = new Cat({ name: 'Zildjian' }); //  实例化Cat表 并且存入一条数据表格

// kitty.save().then(() => console.log('meow')); // 持久化保存kitty实例   储存数据 
kitty.save(function(err, res) { // res返回刚存储的数据
    if (err) {

    } else {

    }
})


const mongoose = require('mongoose'); // 引包 
mongoose.connect('mongodb://localhost/test'); // 连接名为test数据库

// 设计集合结构(表结构)
let blogSchema = new Schema({ // 规定每个文档的属性 和 属性值类型  说白了就是规定表的结构 
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, data: Data }], // Data为日期
    data: { type: Data, defalt: Data.now }, // defalt默认值 
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },
    name: { // 必须有name属性 并且 值为字符串 
        type: String,
        require: true
    }
})

// 文档结构发布为模型
const Cat = mongoose.model('Cat', blogSchema); // 设计表Cat Cat内的规则为blogSchema 返回模型构造函数 系统会将Cat变为小写的复数   cats就是表名字 

// 操作数据 利用模型构造函数操作数据
// ---------------------------------------------------------------------------------------------------------------------------------
// 增
const kitty = new Cat({ name: 'Zildjian' }); //  实例化Cat表 并且存入数据表格 

kitty.save().then((data) => console.log('meow')); // 持久化保存kitty实例   储存数据 data返回添加的数据

// ---------------------------------------------------------------------------------------------------------------------------------
// 查
// findOne()方法只查询第一个
Cat.find({}, function(err, res) { // 查询cats表单的所有的数据(可不加{})  若要按条件查询只需要在对象中传入数据 
    console.log(res);
})

// ---------------------------------------------------------------------------------------------------------------------------------
// 删
Cat.remove({}, function(err, res) { // 根据条件删除内容 res为删除相关的数据 
    console.log(res);
})

// ---------------------------------------------------------------------------------------------------------------------------------
// 改 updata {},{},data=>{}
Cat.findByIdAndUpdate('id', {}, function(err, res) {}) // 根据id 修改id对应数据的数据