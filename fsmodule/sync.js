const fs=require('fs');

//write property
fs.writeFileSync('Student.txt','hello guys,This is the expeiment no 2 of fsd workshop,in this we will learn about file system module,Dated->8/10/2026','utf8')
console.log('File created');

// Read property
const data=fs.readFileSync('Student.txt','utf8');
console.log(data);

//append property
fs.appendFileSync('Student.txt','\nIn the file system module we perform CRUD operation');
fs.appendFileSync('Student.txt','\nMethod->Sync,Async,then-catch promises,async await');
console.log("New information appended");
const data1=fs.readFileSync('Student.txt','utf8');
console.log(data1);

//delete property
// fs.unlinkSync('example.txt');
// console.log("File got deleted");


// creating folder
// fs.mkdirSync("samplefolder1")
// console.log("Folder created");

//deleting folder
// fs.rmdirSync("samplefolder")
// console.log("Folder deleted");

if(fs.existsSync("Student.txt")){
    console.log("File exists");
}
else{
    console.log("File not exists");
}
