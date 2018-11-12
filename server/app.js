const express = require('express');
const path = require('path');
const cardRouter = require('./Routes/cardRoute.js')

let app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
require('dotenv').config()
const dbURL = process.env.MONGO_DB_URL;
const ADMIN_ACCESS = process.env.ADMIN_ACCESS;

mongoose.connect(dbURL, function(err){
    if(err){
      console.log('Error connecting to: '+ dbURL)
      console.log(err)
    }
    else{
      console.log('Connected to: '+ dbURL)
    }
  })

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Answer API requests.
app.use('/api/Card', cardRouter);

app.use('/api/adminAccess/:pass', function(req,res){
  if (req.params.pass == ADMIN_ACCESS){res.send(true);}
  else {
    res.send(false);
  }
})

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});