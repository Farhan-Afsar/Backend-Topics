console.log(global)
console.log(Object.getOwnPropertyNames(global))

//Module function wrapper

(function (exports, require, module, __filename, __dirname) {
    // code goes here
});

const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
console.log("Resolved File Path:", filePath);