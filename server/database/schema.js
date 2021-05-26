var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.set('debug', true);

var TodoSchema = new Schema({
  text: String,
  deadline: Number,
  completed:{
      type:Boolean,
      default: false
  }
});
module.exports = mongoose.model('Todo', TodoSchema);