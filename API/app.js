const express=require('express');
const  mongoose=require('mongoose');
const bodyParser = require("body-parser");

const app=express();


app.use(bodyParser.urlencoded({
    extended: true
}));


const uri = "mongodb://mohit13:vitsucks13@m13-shard-00-00-kpbkz.mongodb.net:27017,m13-shard-00-01-kpbkz.mongodb.net:27017,m13-shard-00-02-kpbkz.mongodb.net:27017/test?ssl=true&replicaSet=M13-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose.connect(uri,{ useNewUrlParser: true },()=>console.log("Connected!"))




const UploadSchema=new mongoose.Schema({
    task:"String"
})

const task_list=mongoose.model('TaskList',UploadSchema);

app.post("/",(req,res)=>{
    const task1 =req.body.task;

    const new_task = new task_list({
        task:task1
    });
    new_task.save((err)=> {
        if (err)
            res.send(err);
        else {
            console.log("Inserted");
            res.send("Inserted");
        }
    });

})




app.listen(3001,()=>{console.log("Server listening to port 3001")});
