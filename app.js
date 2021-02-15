const express= require ('express');
const mongojs=require('mongojs');
//concetion to DB('dbname',['collection to use']) 
const db = mongojs('vesnadb',['autos'])

const app=express();
//set ejs as a view engine 
app.set('view engine','ejs');

//listen to index db route
app.get('/',(req,res)=>{
//our data base is available in const db
//using a collection which stated 
//we need a call back function for a db
db.autos.find((err,data)=>{
//in the response render index page with a property call data 
//which will pass data to index.ejs
res.render('index',{data:data});
})
})

app.listen(3000,()=>{
console.log("listen server on 3000");

})