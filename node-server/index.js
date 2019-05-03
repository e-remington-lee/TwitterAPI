const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
var todayDate = new Date().toISOString().slice(0,10);
const twitterService = require('./twitterService');
const Twit = require('twit');

const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});

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
        console.log(rejectedSearch)
    })
});


app.get('/*', (req, res) =>{
    res.sendFile(__dirname+'/dist/index.html')
});




