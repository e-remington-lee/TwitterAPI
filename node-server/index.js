const express = require('express');
const app = express();

var server = app.listen(3003, () => {
    console.log('server initialized')
});

app.use(express.static(__dirname+'/dist'));

app.get('/api/bob', (req, res) => {
    const bob = {
        text: 'this is text',
        img: 'this is img url',
        created: new Date()
    }

    res.send(bob);
});

app.get('/', (req, res) =>{

    res.sendFile(__dirname+'/dist/index.html');
});