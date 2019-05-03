const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
const Twit = require('twit');

const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});

function randomTweet(username){
    var queryPerson = username;
    var timelineRequest = {
        screen_name: queryPerson,
        count: 25,
        include_rts: false,
        exclude_replies: false,
        trim_user: true
    };
    
    T.get('statuses/user_timeline', timelineRequest, function (err, data, response) { 
        res.send(data);
    });
};

function searchTweet(searchQuery) {

};

module.export = {
    randomTweet: randomTweet,
    searchTweet: searchTweet
};
