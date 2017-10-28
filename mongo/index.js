var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/WSback');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id : {type : String, unique: true, required : true},
  passwd : {type : String, required : true},
  email : {type : String, required : true},
  name : {type : String, required : true}
});
Users = mongoose.model("users", UsersSchema);

var WordsSchema = mongoose.Schema({
  word : {type : String, required : true},
  mean : {type : String, required : true}
});
Words = mongoose.model("words", WordsSchema);

exports.Users = Users;
exports.Words = Words;
