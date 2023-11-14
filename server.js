//const https = require('./http.js')  searches file http.js locally
// function rqListener(req,res){
// }
// http.createServer(rqListener)
// http.createServer(function(req,res){  // anonymous function
// })

const http = require('http');
const routes = require('./routes');

// const server = http.createServer(routes);  //no parenthesis

//multiple exports
const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(4000);