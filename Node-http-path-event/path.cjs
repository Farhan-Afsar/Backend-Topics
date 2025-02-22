const path = require('path');
const { json } = require('stream/consumers');

console.log(__dirname)
console.log(__filename)

const filepath = path.join("home","students","info.txt")

console.log(filepath)

const parsedPath = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({
    parsedPath,
    resolvedPath,
    extname,
    basename,
    dirname
})

// JSON.stringify() ----> object to json
// JSON.parse() ----> json to object