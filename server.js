var express = require('express');
var cors = require('cors');

var app = express();

app.get('/hello', function(req, res) {
    res.send({
        message: 'hello world'
    })
})

app.use(cors());
app.use(express.json());

app.listen(3333);