const express = require('express');
const app = express();

var server = app.listen(3003, () => {
    console.log('server initialized')
});

app.use(express.static(__dirname+'/dist'));

app.get('/', (req, res) =>{

    res.sendFile(__dirname+'/dist/index.html');
});