import fs, { cpSync, mkdirSync, statSync, unlinkSync } from 'fs';

//Write Sync & Async

fs.writeFileSync("./file.txt","Hello Farhan Afsar")

fs.writeFile("./test.txt", "Next line",(error) => {
    // console.log(error);
})

//Read Sync & Async

console.log(fs.readFileSync("./file.txt","utf-8"))

fs.readFile("./test.txt","utf-8",(err,res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
})

//Update-append

console.log(fs.appendFileSync("../test.txt","Append Text"))

fs.appendFile("../test.txt","New Line",(err,res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
})


//Delete

// cpSync - Copy file
// unlinkSync - Delete file
// mkdirSync - create dirctory
// statSync - get file info


