const express = require('express');
const app = express();

const access = require("./config.js");

// const Twit = require('Twit');
// const T = new Twit(access);

app.listen(3003, () => {
    console.log('server initialized on 3003')
    console.log(__dirname)
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


app.get('/*', (req, res) =>{

    res.sendFile(__dirname+'/dist/index.html')

});


