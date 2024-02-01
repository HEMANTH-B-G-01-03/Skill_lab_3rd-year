import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const port=3000;


// built in express middleware, which is alreaady present in express application
// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// custom middleware
const myMiddleware = (req, res, next) =>{
    console.log('middleware executed!');
    next();
};
app.use(myMiddleware);


// Middle1
app.use((req,res,next)=>{
    console.log(" i am middlewear1 ");
    next();
});

// middle 2
app.use((req,res,next)=>{
    console.log('Middle 2');
    res.send('middlewear 2');
});

// middle3
app.use((req,res,next)=>{
    console.log(req.body);
    console.log(" i am middlewear3 ");
    next();
});

// Storing daata which coming from client side
let blogs=[

];
// route handler
// Routing refers to how an application endpoint (URIs) responds to client requests
// create new blog
app.post('/postblog',(req,res)=>{
    console.log(req.body,'req.body');
    blogs.push(req.body);
    res.sendStatus(blogs);
});

// Start the server
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});

