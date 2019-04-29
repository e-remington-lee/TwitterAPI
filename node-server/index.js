const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
// const access = require("./config.js");

const Twit = require('twit');
const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret:  process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});


// app.listen(3003, () => {
//     console.log('server initialized on 3003')
//     console.log(__dirname)
// }); 

app.listen(process.env.PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${process.env.PORT}...`)
    console.log(process.env.consumer_key)
});


app.use(express.static(__dirname+'/dist'));


app.get('/api/randomTweets', (req, res) => {
    var queryPerson = req.query.req
    var timelineRequest = {
        screen_name: queryPerson,
        count: 25,
        include_rts: false,
        exclude_replies: false,
        trim_user: true
    };
    
    T.get('statuses/user_timeline', timelineRequest, function (err, data, response) { 
    
        var userTweet = data;
        let listTweets = [];
     
        userTweet.forEach(function(item){
            listTweets.push(item.text);
        });

        length = listTweets.length;
    
        let randomSelection = Math.floor(Math.random()*(length));

        console.log(queryPerson)
        res.send(listTweets[randomSelection])
    });
})

app.get('/api/searchTweets', (req, res) => {
    var queryString = req.query.q
    var userRequest = {
        q: `${queryString} until:2019-4-25`,
        count: 5,
        lang: 'en'
    };
    
    
    T.get('search/tweets', userRequest, function (err, data, response) {  
        var tweet = data.statuses;
        let listTweets = [];
        let profilePic = [];
        let a = [];
        let b = [];
        let c = [];
    
        tweet.forEach(function(item){
           listTweets.push(item.text);
           b.push(item.in_reply_to_status_id);
           a.push(item.retweeted);
           c.push(item.retweet_count);
           profilePic.push(item.profile_img_url);
        });
        var length1 = listTweets.length-1
 
        let randomSelection1 = Math.floor(Math.random()*(length1));

        console.log(a[randomSelection1])
        console.log(b[randomSelection1])
        console.log(c[randomSelection1])
        console.log(listTweets)
        res.send([listTweets[randomSelection1]]);
    });
});


app.get('/*', (req, res) =>{

    res.sendFile(__dirname+'/dist/index.html')

});




