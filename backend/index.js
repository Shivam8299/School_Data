const express = require('express');
const cors = require('cors');
const mySql = require('mysql');
const bodyParser = require('body-parser')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

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

// app.get('/', (req,res)=>{
//     res.send("welcome to home page")
// })
// +++++++++++++++fetch data+++++++++++

app.get('/',(req,res)=>{
    const sql = 'SELECT * FROM School_data'
    db.query(sql, (error, data)=>{
        if(error) return res.json(error);
        return res.json(data)
    })        
})

//  +++++++++++++++ add new school data +++++++++++++++
// school/new/register
app.post("/",(req, res)=>{
    
    const {name, address, city, state, contact, image, email_id} = req.body;
    // console.log(req.body);
    if (!name || !address || !city || !state || !contact || !email_id ||!image) {
        return res.status(400).json({ error: "All fields are required" });
    }
    if (!email_id.includes("@")) {
        return res.status(400).json({ error: "Invalid email format" });
    }
    
    const sql = `INSERT INTO School_data (name, address, city, state, contact, image, email_id)
VALUES (?, ?, ?, ?, ?, ?, ?)`;

db.query(sql, [name, address, city, state, contact, image, email_id], (error, data) => {
    if (error) {
        return res.json({ error: "Error inserting data", details: error });
    } else {
        return res.json({ message: "School data inserted successfully" });
    }
});

})


app.listen(8080, (error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('server is listing on port no 8080')
    }
})

