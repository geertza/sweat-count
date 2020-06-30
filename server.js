const express = require('express')
// const path = require('path')
const app = express()
var bodyParser= require("body-parser")
var routes = require("./controller/control");
const PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Load static View Engine
app.use(express.static(__dirname + '/public'));


// app.get('/',function (req,res){
//     res.render('index')
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view");
app.use(routes);
app.listen(PORT,function(){
    console.log('server on port 8080...');
})