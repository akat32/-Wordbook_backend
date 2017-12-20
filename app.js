var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var CORS = require('cors')();
require('./mongo');

var auth = require('./routes/auth')(express.Router(),Users);
var word = require('./routes/word')(express.Router(),Words);
var port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(CORS);
app.use('/auth', auth);
app.use('/word', word);
app.set('views', path.join(__dirname, 'views'));
app.set('port', port)
app.set('view engine', 'ejs');
app.get('/main', (req,res)=>{
  res.render('main');
})
.get('/', (req,res)=>{
  res.redirect('/main');
})
.get('/add', (req,res)=>{
  res.render('add');
})
.get('/search', (req,res)=>{
  res.render('search')
})
app.listen(3000, (req,res)=>{
  console.log('Server Port on 3000');
});

module.exports = app;
