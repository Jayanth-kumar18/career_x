var fs=require('fs');
var x='hi to all';
fs.open('my_content.txt','w',function(err){
    if(err){
        throw err;
    console.log("File is with created....");
    }});
fs.writeFile('my_content.txt',x,function(err){
    if(err){
        throw err;
    console.log("value of x is inserted....");
    }
});
fs.appendFile('my_content.txt','Iam appended',function(err){
    if(err){
        throw err;
    console.log("value of x is inserted....");
    }
});