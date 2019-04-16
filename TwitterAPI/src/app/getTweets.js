var access = require("./config.js");

var Twit = require('Twit');
var T = new Twit(access);

var searchData1 = {
    q: 'raindbow since:2019-1-1',
    count: 10
};


// T.get('search/tweets', searchData1, getData);



function getData(err, data, response) {
    var tweet = data.statuses
    var x = 1

    tweet.forEach(function(item){
        console.log(item.text);
        x++;
        console.log(x);
    });
};


var serachData2 = {
    screen_name: 'elonmusk',
    count: 100,
    include_rts: false,
    exclude_replies: true,
    trim_user: true
};


T.get('statuses/user_timeline', serachData2, getData2);

function getData2 (err,data,response) {

    var userTweet = data;
    var listTweets = [];
    var min = 0;
    userTweet.forEach(function(item){
        listTweets.push(item.text);
    });

    var length = listTweets.length;
    console.log(length);
    var randomSelection = Math.floor(Math.random()*(length+1));

    console.log(listTweets[randomSelection]);
};
