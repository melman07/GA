const fs = require("fs");


function saveData(data,fileName){
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName, JSON.stringify(data,null,3),(error)=>{
            if(error) reject(error.message);
            resolve();
        });
    });
};


function getData(fileName){
 return   new Promise( (resolve, reject)=>{
        fs.readFile(fileName,(error,data)=>{
            if(error) reject(error.message);
        resolve(JSON.parse(data.toString()));
    });
    });
};


module.exports = {saveData, getData}