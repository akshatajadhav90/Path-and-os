
//creating os module
const os=require("os");

console.log(os.arch());


//check free memory in Gb
/*const freeMemory=os.freemem();
//console.log(freeMemory); in bytes

console.log(`${freeMemory /1024 /1024 /1024}`);


//check total memory in Gb
const totalMemory=os.totalmem();
console.log(`${totalMemory /1024 /1024 /1024}`);*/

console.log(os.hostname());

console.log(os.platform());

console.log(os.type());
