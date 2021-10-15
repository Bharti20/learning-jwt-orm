const jwt = require('jsonwebtoken');

const privat_key = 'bharti1234';
const payload = {username: 'john', email: 'john@gmail.com'};

//create a json web token(jwt)

const token = jwt.sign(payload, privat_key)//{expiresIn: '5s'})
//console.log(token)

//verify signature

const data = jwt.verify(token, privat_key)
//console.log(data)


//To generate secret, one option is to use Node.js’s built-in crypto library, 
let crypto = require('crypto')
let secret_key = crypto.randomBytes(10).toString('hex')
console.log(secret_key)

