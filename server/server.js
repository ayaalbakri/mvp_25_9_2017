var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var Student = require('../database/index');
mongoose.connect('mongodb://localhost:27017/students');

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client/app'));
  app.get('/',function (req,res) {
  	/* body... */
  	res.send('hello');
  })
app.post("/addMark",function (req,res) {
	console.log(req.body);
	var stdname = req.body.stdname;
	var stdmark = req.body.stdmark;
	var student = {
		name:stdname,
		mark:stdmark
	};
	var std = new Student(student);
	res.send(std);
});

app.get("/allStudent",function (req,res) {
	Student.find({},function(err,students){
		console.log(students);
		res.send(200,students);
	})
})
app.listen(8000);

module.exports = app;
