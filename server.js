//const https = require('./http.js')  searches file http.js locally

const http = require('http');

// function rqListener(req,res){

// }
// http.createServer(rqListener)

// http.createServer(function(req,res){  // anonymous function

// })

const server = http.createServer((req,res) => {  // anonymous function 
  // console.log(req.url, req.method, req.headers)
  //console.log('Shreyas Srikanth');
  const url = req.url;
  //inside if we must return so that it exits the function after res.end
  if(url === '/home'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My first server page</title></head>');
  res.write('<body><h1>Welcome to home</h1></body>');
  res.write('</html>');
  return res.end();
  }
  else if(url === '/about'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first server page</title></head>');
    res.write('<body><h1>Welcome to about us page</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My first server page</title></head>');
  res.write('<body><h1>Welcome to my Node Js project</h1></body>');
  res.write('</html>');
   return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My first server page</title></head>');
  res.write('<body><h1>Welcome to my Node Js project</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(4000);