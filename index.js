import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app =express();

//routes

 app.get("/api/timestamp/:date_string?",(req,res)=>{
     let date_string=req.params.date_string;
     let date;
     if(!date_string){
         date=new Date();
     }
     else {
         if (!isNaN(date_string)){
        date=new Date(parseInt(date_string));
     }
     else{
        date=new Date(date_string);
     }
    }
    if (date.toString()==="Invalid Date"){
        res.json({"error" : "Invalid Date" });
    }
    else{
         res.json({"unix": date.getTime(), "utc" : date.toUTCString(),"date" : date});
    }
        })

app.listen(3000,()=>console.log('listening on port 3000'));