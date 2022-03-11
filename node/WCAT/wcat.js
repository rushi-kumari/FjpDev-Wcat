//3) node wcat.js -n file1 file2 file3 OR node wcat.js -n file1
const fs = require("fs");
let inputArr = process.argv.slice(2); // teke input
//console.log(input);

let filesArr = [];
let optionsArr = [];
//placed files path in fileArr
for(let i = 0; i < inputArr.length; i++){
    filesArr.push(inputArr[i]);
}
//console.log("files to be read" + filesArr);

//check if all the files to be read are present
for(let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("files does not exist");
        //return; or
        process.exit();
    }
}

//content read and appending starts
let content = "";
for(let i = 0; i < inputArr.length; i++){
   let fileContent = fs.readFileSync(filesArr[i]);
   content += fileContent+"\n";
}
console.log(content);
//prints file with different lines
let contentArr = content.split("\n"); //"\r\n"
console.table(contentArr);
//check if is is present or not
let isPresent = optionsArr.includes("-s");
let tempArr = [];
if(isPresent){
    for(let i = 1; i<contentArr.length; i++){
        if(contentArr[i] == "" && contentArr[i-1] == ""){
            contentArr[i] = null;
        }
        else if(contentArr[i] == "" && contentArr[i-1] == null){
            contentArr[i] = null;
        }
    }

    console.table(contentArr);
    
    //push in temp except null
    for(let i = 1; i<contentArr.length; i++){
        if( contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    console.log("data after null removal", temp);
}
contentArr = tempArr;


 //possible combination of options
let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");
//if -n or -b is not found, -1 is returned

let finalOption = "";
//when -n and -b both are present
if(indexOfB != -1 && indexOfN != -1){
    if(indexOfN<indexOfB){
        finalOption = "-n";
    }
    else{
        finalOption = "-b";
    }
}
//when either -n or -b is present
else{
    if(indexOfN != -1)
        finalOption = "-n";
    else if(indexOfB != -1)
        finalOption = "-b";
}

//caling of function by evaluating finaloption
if(finalOption == "-n"){
    modifiyContentByN();
}
else if(finalOption == "-b"){
    modifiyContentByB();
}

function modifiyContentByN(){
    for(let i =0; i<contentArr.length; i++){
        contentArr[i] = (i+1) +") " + contentArr[i];
    }
}
function modifiyContentByB(){
    let count = 1;
   for(let i =0; i<contentArr.length; i++){
        if(contentArr[i] != ""){
            contentArr[i] = count +") " + contentArr[i];
            count++;
        }
    }
}
console.log(content);
