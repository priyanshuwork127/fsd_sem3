const fs=require('fs')

//creating file

fs.writeFile(
    'async.txt','Hello today we are going to study async in fs',(err)=>{
        if(err){
            console.error;
            return ;
        }
        console.log("File created");
    }
)
//reading file

fs.readFile('async.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error in reading:",err);
        return;
    }
    console.log(data);
})

//appending file

fs.appendFile('async.txt',"\n Then we do then-catch","utf8",(err)=>{
    if(err){
        console.log("Error in appending:",err);
        return;
    }
    console.log("Data appended in file")
})

//display updated file
fs.readFile('async.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error in reading:",err);
        return;
    }
    console.log(data);
})

//deleting the file
// fs.unlink('example.txt',(err)=>{
//         if(err){
//             console.log("Error in deleting",err);
//             return;
//         }
//         console.log("Deleted");
// })
