const express = require('express');

const app = express();

//routes

app.get('/', (req ,res) => res.send(' we are in home') )

app.listen(3001);
