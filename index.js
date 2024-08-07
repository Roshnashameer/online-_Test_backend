// load env file
require('dotenv').config()
// import express 
const express = require('express')
const cors=require('cors')
const router = require('./routes/routes')
require('./db/connection')
// create server using express
const onlineTestServer = express()
// convert all incoming json data to js data
onlineTestServer.use(express.json())
onlineTestServer.use(cors())
onlineTestServer.use(router)

const PORT = 4006 || process.env.PORT
onlineTestServer.listen(PORT, () => {
    console.log(`________onlineTestServer  started at ${PORT}___`);
})
onlineTestServer.get('/',(req,res)=>{
    res.send('<h1>pdt server started</h1>')
})