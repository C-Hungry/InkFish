const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


mongoose.connect("mongodb://localhost:27017/test");
//申明一个mongoons对象
const UsersSchema = new mongoose.Schema({
  account: String,
  password: String
})

//创建模型，可以用它来操作数据库中的person集合，指的是整体
var UsersModel = mongoose.model("account", UsersSchema);


//查询的静态方法
// UsersSchema.statics = {
//     fetch: function(cb) { //查询所有数据
//         return this
//           .find()
//           .sort('meta.updateAt') //排序
//           .exec(cb) //回调
//     },
//     findById: function(id, cb) { //根据id查询单条数据
//         return this
//           .findOne({_id: id})          
//           .exec(cb)
//     }
// }

// 注册
router.post('/register', function (req, res) {
  UsersModel.find({ account: req.body.account }, (err, docs) => {
    console.log(err);
    console.log("===================================");
    console.log(docs);
    if (docs.length) {
      res.json({code: 200,msg: "用户已存在！"})
    } else {
      //根据模型创建实体，是指的个体对象
      var personEntity = new UsersModel({
        account: req.body.account,
        password: req.body.password
      });
      //用save 方法把自己保存到数据库中
      personEntity.save(function (error, doc) {
        if (error) {
          console.log("error :" + error);
          res.json({code: 200,msg: "保存失败！",error: error});
        } else {
          console.log(doc);
          res.json({code: 200,msg: "保存成功！"});
        }
      });
    }
  })
});
//暴露出去的方法
module.exports = router