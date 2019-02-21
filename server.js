/**
 * Created by Jason Wong on 4/9/2017.
 */
const express = require('express'); //this is the app
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const Stack = new require('./src/Stack');
let stack = new Stack();

app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
    res.json({
        status: "Server Running"
    })
});

app.get('/list', (req, res) => {
    res.json(stack.list());
});

app.get('/top', (req, res) => {
    res.json(stack.top());
});

app.post('/push', (req, res) => {
    res.json(stack.push(req.body.n));
});

app.post('/pop', (req, res) => {
    res.json(stack.pop());
});

app.delete('/clear', (req, res) => {
    res.json(stack.clear());
});

app.listen(8080, function () {
    console.log("Server started")
});