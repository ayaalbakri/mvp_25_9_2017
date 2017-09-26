var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');



var studentSchema = mongoose.Schema({
  id: Number,
  name: String,
  mark: Number,
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;