var orm = require('generic-orm-libarry')
var user = orm('user').where({email:'bha@.com'})
console.log(orm)