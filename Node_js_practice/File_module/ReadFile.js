var fs=require('fs');
fs.readFile('my_content.txt',(err,data)=>{
    if(err){
        throw err;
    }
    // utf unicode transfer format
    console.log(data.toString('utf8'));
});