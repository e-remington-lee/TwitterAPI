const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
const Twit = require('twit');
var todayDate = new Date().toISOString().slice(0,10);
var APIerror = 'Error 344: Did not connect to API';

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
    let randomPromise = new Promise(function(resolve, reject) {
        if (username) {
                T.get('statuses/user_timeline', timelineRequest, function (err, data, response) { 
            resolve(data)});
        } else {
            reject(APIerror);
        };
    });
    return randomPromise;
};

var searchTweet = function searchTweet(searchQuery) {
    var userRequest = {
        q: `${searchQuery} until:${todayDate}`,
        count: 10,
        lang: 'en'
    };
    let searchPromise = new Promise((resolve,reject) => {
        if (searchQuery) {
            T.get('search/tweets', userRequest, function (err, data, response) {  
             resolve(data.statuses)});
        } else {
            reject(APIerror);
        }
    })
    return searchPromise;
};

module.exports = {
    randomTweet: randomTweet,
    searchTweet: searchTweet
};
