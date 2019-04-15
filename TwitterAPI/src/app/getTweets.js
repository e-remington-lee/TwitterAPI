var access = require("./config.js");

var Twit = require('Twit');
var T = new Twit(access);

var searchData1 = {
    q: 'raindbow until:2019-4-10',
    count: 10
};


T.get('search/tweets', searchData1, getData);



function getData(err, data, response) {
    var tweet = data.statuses
    var x = 1

    for (let i = 0; i<tweet.length; i++){
        console.log(tweet[i].text)
        x++
        console.log(x)
    }
};


// var serachData2 = {
//     screen_name: 'elonmusk',
//     count: 10
// };

// T.get('users/:screenname', serachData2, getData2);

// function getData2 (err,data,response) {
//     console.log(data)
// };
