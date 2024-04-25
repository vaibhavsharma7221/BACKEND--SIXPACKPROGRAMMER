//DESIGNING A SERVER

const http = require("http");
const hostname="localhost";
const PORT= 80;

console.log(__dirname);
console.log(__filename);

const server=http.createServer((req,res)=>{
   
    if(req.url==="/about"){
        res.end("<h1>this is about page</h1>");
    }

    if(req.url==="/contact"){
        res.end("<h1>this is contact list</h1>")
    }

    if(req.url==="/service"){
        res.end("<h1>sevice page</h1>")
        }

    else{
        res.end("<h1>404:Page not found</h1>")
    }    
})

server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`);
})


//Scripts in package.json.....

// eg:"start":"node index.js"
//now whenever we will type npm start 
//automatically index.js will start working
