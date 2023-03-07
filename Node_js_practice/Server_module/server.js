var HTTP=require('http');
var server=HTTP.createServer(function(req,res){
    res.write('<html><body><h1>Welcome to node js practice</h1></body></html>');
})
server.listen(5050);
console.log('hi');