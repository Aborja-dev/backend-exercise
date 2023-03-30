const { mongoose } = require("mongoose")
const url = process.env.MONGO_DB_URI_TEST

console.log(process.env.NODE_ENV)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("connected to database")
})
    
