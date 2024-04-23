// node .\index.js is used to run code in terminal
// npm is "node package manager" and is used to install new packages and manage them.
// 

const a=5;

//**** WINDOW OBJECT ****//

//console.log(window);

//window won't be defined in backend because we have window is 
//a front-end object



//**** PACKAGE.JSON  ****//

//package.json file provides us with metadata about our project
//such as name,version,author,description about the project

// it is an index of all packages versions in node modules



//**** PACKAGE-LOCK.JS ****//

//package-lock.json stores metadata about dependencies

//helps in locking the version of each package

//When another developer runs npm install in the same project,
//npm reads the package-lock.json file and installs the exact 
//versions of dependencies specified in it.



// *****NODE_MODULES fOLDER****** //

// node_modules conatains all the packages and their dependencies

//node_modules are never pushed in repositories because it can be 
//very larege and contains files that can be easily generated

// Instead, of this 'package.json' file is included, which consists
// of list of repositories. If another developer clones the project
// they can run 'npm install' to recreate 'node-modules' dirctory 
// based on depencencies specified in 'package.json



//***  MODULE IN NODEJS***//

//MODULE is a file or collection of file that uses reusable code

const x=500;


// file based module
const y={
    average:(a,b)=>{
        console.log((a+b)/2);
    },

    percentage:(a,b)=>{
         console.log((a+b)/100);
    }
};

module.exports=y; // old manner of exporting

//Types of node modules:
//1)file based (what we studied above)
//2)built-in (modeules which we don;t need to install)
//3)Third party  


//BUILT-IN MODULE

const fs= require("fs");// OLD MANNER OF IMPORTING

//READ FILE FUNCTION
fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
    throw err;
    }
    console.log(data);
})// asyncronous fxn


console.log(fs.readFileSync("./sample.txt","utf-8"));

const {readFileSync}= require("fs"); // directly importing readFileSync => we need not to write fs below

console.log(readFileSync("./sample.txt","utf-8"))

console.log("I am first");// this will be printed first

//WRITE FILE FUNCTION

let z="good to go";

fs.writeFile("./sample2.txt",z,()=>{
    console.log("written");
})


//***** PATH MODULE******//
const path= require("path");

const p=path.extname("/LEARNING NODE/index.js");
console.log(p);

const q=path.basename("C:\Users\vaibh\Downloads\learning node");
console.log(q);

const r=path.dirname("C:\Users\vaibh\Downloads\learning node");
console.log(r);

//***** OS MODULE *****//

const os=require("os");
console.log(os.freemem());
console.log(os.hostname());



//******THIRD-PARTY MODULE ******// 
const pok=require("pokemon");
console.log(pok.random());

// use of -g means "we can use it globally" i.e. the scope of the installed module 
// will not be limited to this project we can use it in any project across multiple disks.
