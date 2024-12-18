const express = require('express');
const cors = require('cors');
const mySql = require('mysql');


const app = express()
app.use(cors())

const db = mySql.createConnection({
    host: 'localhost',
    user:'root',
    password:'shivam@123',
    database:'School'

})
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/', (req,res)=>{
    res.send("welcome to home page")
})
// +++++++++++++++fetch data+++++++++++

app.get('/school',(req,res)=>{
    const sql = 'SELECT * FROM School_data'
    db.query(sql, (error, data)=>{
        if(error) return res.json(error);
        return res.json(data)
    })        
})

app.listen(8080, (error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('server is listing on port no 8080')
    }
})

