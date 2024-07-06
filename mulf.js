var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.sendFile("welcome to express mildware");
});
app.get('/help',function(req,res){
    res.send('How can i help u');
});
var server=app.listen(8000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("expample2 app listening at http://%s:%s",host,port)
})