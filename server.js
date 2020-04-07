var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());

app.get('/hello', function(req, res) {
    res.send({
        message: 'Hello World'
    })
})

app.post('/sum', function(req, res) {

    if (req.body.num1 && req.body.num2) {
        res.send({
            result: Number(req.body.num1) + Number(req.body.num2)
        })
    } else {
        res.status(400).send({
            message: "num1 and num2 can't be null"
        })
    }

})

app.listen(3333);