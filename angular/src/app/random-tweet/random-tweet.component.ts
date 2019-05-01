import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-random-tweet',
  templateUrl: './random-tweet.component.html',
  styleUrls: ['./random-tweet.component.scss']
})
export class RandomTweetComponent implements OnInit {

  randomTweet: Object;
  queryPerson: Object;
  person: String;
  tweetImage: String;
  randomNumber: Number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.person ='Click a Picture to View One of Their Recent Tweets!'

    this.randomNumber = 0;
  }

  random() {
    this.data.getRandom(this.queryPerson).subscribe(data => {
      this.randomTweet = data;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        };
        return size;
    };

    var size = Object.size(data)
    this.randomNumber = Math.floor(Math.random()*(size));
    console.log(data)
    });
  }
  

  elon() {
    //images are 400x400
    this.person = 'Elon Musk Tweeted:';
    this.queryPerson ='elonmusk';
    this.tweetImage ='https://i.imgur.com/CNhZzYY.jpg'
  }

  constance() {
    this.person = 'Constance Wu Tweeted:';
    this.queryPerson ='constancewu';
    this.tweetImage ='https://speakerbookingagency.com/wp-content/uploads/bb-plugin/cache/constancewu-square.jpg'
  }

  gal() {
    this.person = 'Gal Gadot Tweeted:';
    this.queryPerson ='galgadot';
    this.tweetImage = 'https://i.imgur.com/YxrCsT6.jpg'
  }

  daymond() {
    this.person = 'Daymond John Tweeted:';
    this.queryPerson ='thesharkdaymond';
    this.tweetImage = 'https://pbs.twimg.com/profile_images/1048022980863954944/eZvGANn0_400x400.jpg'
  }

  ben() {
    this.person = 'Ben&Jerry\'s Tweeted:';
    this.queryPerson ='benandjerrys';
    this.tweetImage = 'https://www.benjerry.com/files/live/sites/systemsite/files/whats-new/6588-flavor-flops/6-Hazed-Confused-400x400.jpg'
  }

}

