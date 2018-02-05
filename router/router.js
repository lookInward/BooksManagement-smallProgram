// 这个模块只关心对象，不关心数据库
var express=require('express');
var app=express();
var Book=require('../models/Book.js');
var mongoose=require('mongoose');

// 首页
exports.showIndex=function(req,res,next){
    Book.allBooks(function(err,result){
         res.render('index',{
        "books":result
        })
    })
   
}
// 载入表单页面
exports.addbook=function(req,res,next){
    res.render('addbook');
}

// 增加数据到数据库
exports.doadd=function(req,res,next){
    Book.create(req.query,function(err){
        if(err){
            res.send("保存失败!");
        }
        res.send("保存成功!");
    });
    // res.render('addbook');
}

// 从数据库得到书籍信息
exports.edit=function(req,res,next){
    var id = req.query.id; 
    Book.findBookById(id,function(err,result){
        res.render("edit",result[0]);
    })
}

// 修改书籍信息
exports.doedit=function(req,res,next){
    var conditions = {_id : req.query.id};
    var update     = {$set : req.query};
    var options    = {upsert : true};
    Book.update(conditions, update, options, function(error){
        if(error) {
            res.send('修改失败！');
        } else {
            res.send('修改成功！');
        }
    });
}