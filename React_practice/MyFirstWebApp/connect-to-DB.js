const exp=require("express");
const app=exp();
const mong=require('mongoose');
mong.connect('mongodb://localhost:27017/sales')
.then(()=>console.log('connected'));
app.listen(3002)