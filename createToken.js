asdddconst express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const dotenv = require('dotenv')
app.use(express.json())
dotenv.config();
let secret_key = crypto.randomBytes(10).toString('hex')
process.env.TOKEN_SECRET

app.post('/api/createNewUser', (req, res) => {
    const token =jwt.sign({ username: req.body.username }, process.env.TOKEN_SECRET, {expiresIn:'10s'})
    res.json(token);
  
  });
app.listen(3000, function(err) {
    if(err) throw err;
    console.log('server is running--')
})


