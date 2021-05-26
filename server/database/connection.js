var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://mongo:mongo123@cluster0.pjyop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));