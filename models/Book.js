var mongoose=require('mongoose');
var db=require('./db.js');

var bookSchema = new mongoose.Schema({
    name: {type: String},
    author: {type:String},
    price:  {type: Number}
    // type:   {type:Array,default:""}
  });
bookSchema.statics.allBooks=function(callback){
    this.find({},callback);
}
bookSchema.statics.findBookById=function(id,callback){
    var id = mongoose.Types.ObjectId(id); //解决数据库自带id的ObectId问题
    this.find({"_id":id},callback);
}

  var bookModel = db.model('Book', bookSchema);
  module.exports=bookModel;