var router=require('./router/router.js');
var db=require("./models/db.js");
var express=require("express");
var app=express();

app.set("view engine","ejs");

app.get("/",router.showIndex);
app.get('/addbook',router.addbook);
app.get('/doadd',router.doadd);
app.get('/edit',router.edit);
app.get('/doedit',router.doedit);

app.listen(3000);