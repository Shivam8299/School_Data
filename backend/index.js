const express = require('express');
const cors = require('cors');
const mySql = require('mysql');

const app = express()
app.use(cors())

app.get('/', (req, res)=>{
    res.send('welcome to backend')
})

app.listen(8080, (error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('server is listing on port no 8080')
    }
})

