//const https = require('./http.js')  searches file http.js locally

const http = require('http');
const fs = require('fs');
// function rqListener(req,res){

// }
// http.createServer(rqListener)

// http.createServer(function(req,res){  // anonymous function

// })

const server = http.createServer((req,res) => {  // anonymous function 
 const url = req.url;
 const method = req.method;

 if(url==='/'){
  const fileData = fs.readFileSync('message.txt','utf-8');
  const line = fileData.split('/n')
  console.log(line[0]);
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Enter message</title></head>');
  res.write('<body>');
  res.write('<p>'+ line[0] +'</p>');
  res.write('<form action="/message" method="POST"><input type = "text" name="message"><button type = "submit">Send</button></form>');
  res.write('</body>')
  res.write('</html>');
  return res.end();
 }

 if (url === '/message' && method === 'POST'){
  const body = [];
  req.on('data',(chunk) =>{
    body.push(chunk);
  });

  return req.on('end',()=>{                         // if no return this wont be executed because event listeners callback functions will be executed at last
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1] //splitting the data [1] targets second element after =
    fs.writeFileSync('message.txt',message);
    res.statusCode=302 ;
    res.setHeader('Location','/') //Location is default header
    return res.end();
  })
 }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My first server page</title></head>');
  res.write('<body><h1>Welcome to my Node Js project</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(4000);