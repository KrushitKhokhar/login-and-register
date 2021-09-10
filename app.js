const express = require("express");
const path = require ('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000
dotenv.config({path: './.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE 
});


// parse URL-encoded bodies(as sent by HTML forms)
app.use(express.urlencoded({ extended:false}));
//parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
app.use(cookieParser());

app.set('view  engine',);
db.connect((error) => {
    if(error) {
        console.log(error) 
    }else{
        console.log("MYSQL Connected...")
    }
});

//define routes
app.use('/auth', require('./routes/auth.js'));


app.listen(port,() => {
    console.log(`server started on port ${port}`);
});