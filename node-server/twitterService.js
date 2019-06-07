const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
const Twit = require('twit');
var todayDate = new Date().toISOString().slice(0,10);

const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});


var randomTweet = function randomTweet(username){

    var queryPerson = username;
    var timelineRequest = {
        screen_name: queryPerson,
        count: 25,
        include_rts: false,
        exclude_replies: false,
        trim_user: true
    };

    return T.get('statuses/user_timeline', timelineRequest)
};
var searchTweet = function searchTweet(searchQuery) {
    var userRequest = {
        q: searchQuery,
        count: 10,
        lang: 'en',
        until: todayDate,   
    };

    return T.get('search/tweets', userRequest)
};

module.exports = {
    randomTweet: randomTweet,
    searchTweet: searchTweet
};
