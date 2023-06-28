var exp=require('express');
var app=exp();

var bp = require('body-parser');
app.use(bp.urlencoded({extended:false}));

app.use(exp.static('folder1'));
var mysql=require('mysql2');

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dac"
});

conn.connect(function(err){
    if(!err)
    console.log("connected");
    else
    console.log("error");
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+'/json.html');
});

app.post('/getemps',function(req,res){
    var name=req.body.deptno;
    conn.query('select * from emp where deptno='+name,function(err,result){
        if(!err)
        {
            //alert(result.length)
            res.send(JSON.stringify(result));
             
        }
    })
})
app.listen(9000,function(){
    console.log('start 9000');
});