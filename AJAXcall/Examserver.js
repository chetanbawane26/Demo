var exp=require('express');
var app=exp();
var bp=require('body-parser');
app.use(bp.urlencoded({extended:false}));

app.listen(9000,function(){
    console.log("server connected on 9000 port");
});

app.get('/getform',function(req,res){
    res.sendFile(__dirname+'/Examfrom.html');
});

app.post('/getDataTable',function(req,res){
    var name=req.body.n;
    var date=req.body.d;
    var email=req.body.e;
    var qul=req.body.q;
    console.log(name);
   var str="<table border='1'>";
    str+="<tr><td>"+name+"</td></tr>";
    str+="<tr><td>"+date+"</td></tr>";
    str+="<tr><td>"+email+"</td></tr>";
    str+="<tr><td>"+qul+"</td></tr>";
  str+="</table>";
  res.send(str);
})