const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb://localhost/test',(err)=>{
  console.log(err)
});
// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

var UsersSchema = new mongoose.Schema({
  name: String,
  paw: String,
  meta: { 
      createAt: {
          type: Date,
          default: Date.now()
      },
      updateAt: {
          type: Date,
          default: Date.now()
      }
  }
})


//申明一个mongoons对象
var UsersSchema = new mongoose.Schema({
  name: String,
  paw: String,
  meta: { 
      createAt: {
          type: Date,
          default: Date.now()
      },
      updateAt: {
          type: Date,
          default: Date.now()
      }
  }
})

//每次执行都会调用,时间更新操作
UsersSchema.pre('save', function(next) {
  if(this.isNew) {
      this.meta.createAt = this.meta.updateAt = Date.now();
  }else {
      this.meta.updateAt = Date.now();
  }

  next();
})

//查询的静态方法
UsersSchema.statics = {
  fetch: function(cb) { //查询所有数据
      return this
        .find()
        .sort('meta.updateAt') //排序
        .exec(cb) //回调
  },
  findById: function(id, cb) { //根据id查询单条数据
      return this
        .findOne({_id: id})          
        .exec(cb)
  }
}

module.exports = UsersSchema;