var access = require("./config.js");

var Twit = require('Twit');
var T = new Twit(access);

var searchData = {
    q: 'raindbow until:2019-4-10',
    count: 10
};


T.get('search/tweets', searchData, getData);

function getData(err, data, response) {
    var tweet = data.statuses
    var x = 1

    for (let i = 0; i<tweet.length; i++){
        console.log(tweet[i].text)
        x++
        console.log(x)
    }
};
