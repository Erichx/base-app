const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
 
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: false, limit: '2mb' }));

const  usersRouter = require('./routes/users'); 

app.use('/users', usersRouter) 

//conect to DB
mongoose.connect(
  'mongodb://localhost:27017/base',
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected with DB");
  }
);


//listen
app.listen(3001);