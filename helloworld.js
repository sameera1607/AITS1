var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/plain'});
    response.end('HELLO WORLD\n');
}).listen(9000);
console.log('server running at http://localhost:9000/');