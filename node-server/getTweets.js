var access = require("../../config.js/index.js");

var Twit = require('Twit');
var T = new Twit(access);

var searchData1 = {
    q: 'strawberry since:2018-1-1',
    count: 50,
    lang: 'en'
};


T.get('search/tweets', searchData1, getData);



function getData(err, data, response) {
    var tweet = data.statuses;
    let listTweets = [];
    let profilePic = []

    tweet.forEach(function(item){
       listTweets.push(item.text);
       profilePic.push(item.profile_img_url);
    });
    listTweets.forEach(function(item){
        console.log(item + '\n')
    });
    console.log(listTweets.length+' tweets')
    console.log(profilePic.length+' pictures')
};


var serachData2 = {
    screen_name: 'elonmusk',
    count: 100,
    include_rts: false,
    exclude_replies: false,
    trim_user: true
};


T.get('statuses/user_timeline', serachData2, getData2);

function getData2 (err,data,response) {

    var userTweet = data;
    let listTweets = [];
 
    userTweet.forEach(function(item){
        listTweets.push(item.text);
    });

    let length = listTweets.length;
    console.log(length+' elon tweets');
    let randomSelection = Math.floor(Math.random()*(length+1));

    console.log('Elon Tweet: ' + listTweets[randomSelection]);
};
