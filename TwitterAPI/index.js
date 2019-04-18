const express = require('express');
const app = express();

var server = app.listen(3003, () => {
    console.log('server initialized')
});

app.use(express.static(__dirname+'/src'));

app.get('/', (req, res) =>{
    console.log('dfa')
    res.send("hello");
});