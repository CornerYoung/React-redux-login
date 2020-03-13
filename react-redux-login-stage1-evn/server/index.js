const express = require('express')
const user = require('./routes/user')
const app = express()

app.use('/api/user',user)

app.listen(3001,(req,res)=>{
    console.log('服务器运行在3001端口上')
})