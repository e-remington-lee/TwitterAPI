const express = require('express');
const app = express();

const access = require("./config.js");

const Twit = require('Twit');
const T = new Twit(access);

app.listen(3003, () => {
    console.log('server initialized on 3003')
    console.log(__dirname)
}); 


app.use(express.static(__dirname+'/dist'));


app.get('/api/randomTweets', (req, res) => {
  
    var timelineRequest = {
        screen_name: 'elonmusk',
        count: 10,
        include_rts: false,
        exclude_replies: true,
        trim_user: true
    };
    
    
    T.get('statuses/user_timeline', timelineRequest, function (err, data, response) { 
    
        var userTweet = data;
        let listTweets = [];
     
        userTweet.forEach(function(item){
            listTweets.push(item);
        });
        length = listTweets.length
        console.log(length+' elon tweets');
        let randomSelection = Math.floor(Math.random()*(length+1));
        console.log('Elon Tweet: ' + listTweets[randomSelection]);
        
        res.send(listTweets[randomSelection])
    });
})

app.get('/api/searchTweets', (req, res) => {
    var userRequest = {
        q: 'strawberry since:2018-1-1',
        count: 4,
        lang: 'en'
    };
    
    
    T.get('search/tweets', userRequest, function (err, data, response) {  
        var tweet = data.statuses;
        let listTweets = [];
        let profilePic = []
    
        tweet.forEach(function(item){
           listTweets.push(item.text);
           profilePic.push(item.profile_img_url);
        });
        // listTweets.forEach(function(item){
        //     console.log(item + '\n')
        // });
        console.log(listTweets)
        res.send([listTweets[0]]);
    });
});


app.get('/*', (req, res) =>{

    res.sendFile(__dirname+'/dist/index.html')

});




