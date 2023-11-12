//const https = require('./http.js')  searches file http.js locally

const http = require('http');

// function rqListener(req,res){

// }
// http.createServer(rqListener)

// http.createServer(function(req,res){  // anonymous function

// })

const server = http.createServer((req,res) => {  // anonymous function 
  console.log('Shreyas Srikanth');
});

server.listen(4000);