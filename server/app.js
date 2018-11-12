const express = require('express');

let app = express();
const PORT = process.env.PORT || 5000;

app.use('/', function(req,res){
    res.send("hi");
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});