import crypto from "crypto";

let start = Date.now();

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",() => {
    console.log(`${Date.now() - start} ms`)
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",() => {
    console.log(`${Date.now() - start} ms`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",() => {
    console.log(`${Date.now() - start} ms`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",() => {
    console.log(`${Date.now() - start} ms`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",() => {
    console.log(`${Date.now() - start} ms`)
})
