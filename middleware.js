import bodyParser from"body-parser";
import express from " express";
const app =express();


// costome moddle wear 
const middleware =(req,res,next)=>{
    console.log(" i am a middlewaer executed");
    next();
};

app.use(middleware)



