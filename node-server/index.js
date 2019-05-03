const express = require('express');
const app = express();
const twitterService = require('./twitterService');

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}...`);
});

app.use(express.static(__dirname+'/dist'));

app.get('/api/randomTweets', (req, res) => {
        twitterService.randomTweet(req.query.req).then(userData => {
        res.send(userData);      
    }).catch((rejectedRandom) => {
        console.log(rejectedRandom);
    });
});

app.get('/api/searchTweets', (req, res) => {
    twitterService.searchTweet(req.query.q).then(searchData => {
        res.send(searchData);
    }).catch((rejectedSearch) => {
        console.log(rejectedSearch);
    });
});

app.get('/*', (req, res) =>{
    res.sendFile(__dirname+'/dist/index.html');
});




