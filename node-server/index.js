const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
var todayDate = new Date().toISOString().slice(0,10);
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
    var queryPerson = req.query.req;
    var timelineRequest = {
        screen_name: queryPerson,
        count: 25,
        include_rts: false,
        exclude_replies: false,
        trim_user: true
    };
    
    T.get('statuses/user_timeline', timelineRequest, function (err, data, response) { 
        var userTweet = data;
        res.send(userTweet);
    });
});

app.get('/api/searchTweets', (req, res) => {
    var queryString = req.query.q;
    var userRequest = {
        q: `${queryString} until:${todayDate}`,
        count: 10,
        lang: 'en'
    };
    
    
    T.get('search/tweets', userRequest, function (err, data, response) {  
        var tweet = data.statuses;
        res.send(tweet);
    });
});


app.get('/*', (req, res) =>{
    res.sendFile(__dirname+'/dist/index.html')
});




