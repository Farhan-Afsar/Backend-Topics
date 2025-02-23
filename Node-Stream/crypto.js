const crypto = require('crypto')

const randomValues = crypto.randomBytes(8);

console.log(randomValues.toString("hex"))

const hashValue = crypto.createHash("sha256").update("Farhan").digest("hex")

const inputValue = "Farhn"

const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")

if(hashValue === matchValue){
    console.log("Same")
}
else{
    console.log("Different")
}
