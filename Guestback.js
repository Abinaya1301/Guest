const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root12345",
    database: "signup"
})
app.post('/signup', (reg, res)=>{
    const sql = "INSERT INTO login ('Email id','Password','Address','Age','Phone Number','Number of rooms','Number of guests') VALUES (?)";
    const values = [
        req.body.Emailid,
        req.body.Password,
        req.body.Address,
        req.body.Age,
        req.body.PhoneNumber,
        req.body.Numberofrooms,
        req.body.Numberofguests
    ]
    db.query(sql,[values],(err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
    db.query(sql,[])
})
app.listen(8081, ()=> {
    console.log("listening");
})