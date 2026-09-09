const fs=require("fs").promises;

//write file
async function writeFile(){
    try{
        await fs.writeFile("await.txt","Hello guys,now we will going with async await");
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
        const data=await fs.readFile("await.txt","utf8");
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
        await fs.appendFile("await.txt","\n Then we will do the last part","utf8");
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
        await fs.rename("await.txt","async_await.txt");
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