var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());

app.get('/hello', function(req, res) {

    var os = require("os");
    var hostname = os.hostname();

    res.send({
        message: 'Hello World',
        hostname: hostname
    })
})

app.listen(3333);