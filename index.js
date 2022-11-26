const http = require("http");
const fs = require("fs");


const PORT = process.env.PORT;


const home = fs.readFileSync("./index.html","utf-8")

const server = http.createServer((req,res)=>{

    if(req.url==="/"){
        return res.end(home);
    }

    if(req.url==="/about"){
        return res.end("Hello from About Page");
    }

    if(req.url==="/contact"){
        return res.end("Hello from contact page");
    }

    if(req.url==="/service"){
        return res.end("Hello from Service page")
    }

    else{
        return res.end("<h1>404 Page not found</h1>")
    }
});

server.listen(PORT,()=>{
    console.log(`server is working`);
});