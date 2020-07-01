const mongoose = require('mongoose')
const express = require('express')
// const path = require('path')
const app = express()
var bodyParser= require("body-parser")
// var routes = require("./controller/control");
const PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Load static View Engine
app.use(express.static(__dirname + '/public'));
// extend badyparser to global(allfiles scope)
app.use(bodyParser.urlencoded({ extended: true }));
//create json command
app.use(express.json());
//set up routes
app.set("view");
// app.use(routes);
app.use(require("./controller/apiRoutes"));
app.use(require("./controller/control"));
//show connection is made
app.listen(PORT,function(){
    console.log('server on port 8080...');
})

//mongodb connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
   useFindAndModify: false,
   
});
// Connection URL
// const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';
mongoose.connection.once('open',function(){
    console.log('Mongo connected')
}).on('err',function(){
    console.log('mongo error',err)
})