const express = require('express')
const user = require('./routes/user')
const debug = require('debug')('my-application')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api/users',user)

app.listen(3001,(req,res)=>{
    debug('服务器运行在3001端口上')
})