const exp=require('express');
const app=exp();
app.get('/hi',(req,res)=>{
    res.send("Hi this is my first app");
});
app.post('/hello',(req,res)=>{
    res.send("Hello Iam post method");
});
app.put('/hello',(req,res)=>{
    res.send("Hello Iam put method");
});
app.delete('/hello',(req,res)=>{
    res.send("Hello Iam delete method");
});
app.listen(3004,()=>{
    console.log("app is created");
});