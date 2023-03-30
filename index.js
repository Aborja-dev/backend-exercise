require('dotenv').config()
const server = require("./src/server.js")
require('./mongo.js')
server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})
