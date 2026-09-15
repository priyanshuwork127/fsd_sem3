const fs=require("fs").promises;

//write file
async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello guys,now we will going with promises");
        console.log("File is created");
    }
    catch(error){
        console.log(error);
    }
}
writeFile();

//read file

async function readFile(){
    try{
        const data=await fs.readFile("promise.txt","utf8");
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
readFile();


//appending in file

async function appendFile(){
    try{
        await fs.appendFile("promise.txt","\n Then we will do the last part","utf8");
        console.log("data is updated in the file");
    }
    catch(error){
        console.log("Error:",error);
    }
}
appendFile();

readFile();

//rename

async function renameFile(){
    try{
        await fs.rename("promise.txt","promise_catch.txt");
        console.log("Renamed");
    }
    catch(error){
        console.log(error);
    }
}
renameFile()

//DELETING FILE

async function unlink(){
    try{
        await fs.unlink("example.txt");
        console.log("File deleted");
    }
    catch(error){
        console.error;
    }
}
unlink()