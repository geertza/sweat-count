const mongoose = require ('mongoose')

//mongodb connect
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'tracker';
mongoose.connection.once('open',function(){
    console.log('Mongo connected')
}).on('err',function(){
    console.log('mongo error',err)
})