const express =require("express");
const mysql=require("mysql2");
const app=express();
let port=3000;
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"foodshop",
    port:3306,
});
db.connect((err)=>{

    if(err){
        console.log(err,"error");
    }
    else{
        console.log("connected");
    }
});

app.put("/:id",(req,res)=>{
    let id =req.params.id;
    let qry= "UPDATE foodmenu SET gst=7 WHERE id='"+id+"'";
    
    db.query(qry,(err,result)=>{
      if (err){
            console.log(err,"error");
        }
     if(result.affectedRows == 1){
        res.send({status:true,msg:"connected database",data:result});
        }
        else{
            res.send({status:false,msg:"falied"});

        }

    });
});
app.listen(port,()=>{
    console.log("the server is running");
});