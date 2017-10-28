var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./mongo');

var auth = require('./routes/auth')(express.Router(),Users);
var word = require('./routes/word')(express.Router(),Words);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use('/auth', auth);
app.use('/word', word);
app.listen(3000, (req,res)=>{
  console.log('Server Port on 3000');
});

module.exports = app;
