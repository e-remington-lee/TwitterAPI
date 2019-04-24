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

// app.get('/api/bob', (req, res) => {
//     const bob = {
//         text: 'this is text',
//         img: 'this is img url',
//         created: new Date()
//     }
//     res.send(bob);
// });


app.get('/*', (req, res) =>{

    res.sendFile(__dirname+'/dist/index.html')

});


var serachData2 = {
    screen_name: 'elonmusk',
    count: 10,
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
    // console.log(length+' elon tweets');
    let randomSelection = Math.floor(Math.random()*(length+1));
    // console.log('Elon Tweet: ' + listTweets[randomSelection]);
    return listTweets[randomSelection]
};