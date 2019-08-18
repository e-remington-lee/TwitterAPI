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
  person: string;
  tweetImage: string;
  randomNumber: number;
  showSpinner: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.person ='Click a Picture to View One of Their Recent Tweets!';
    this.randomNumber = 0;
  }

  random() {
    this.showSpinner = true;
    this.data.getRandom(this.queryPerson).subscribe(data => {
      this.randomTweet = data;
      this.showSpinner = false;
    
    var size = Object.keys(data).length;

    this.randomNumber = Math.floor(Math.random()*(size));
    });
  }

  scrollBottom() {
    var messageBox = document.getElementById("messageBox");  
    messageBox.scrollIntoView();
  }
  

  elon() {
    //images are 400x400
    this.person = 'Elon Musk Tweeted:';
    this.queryPerson ='elonmusk';
    this.tweetImage ='/assets/elon.jpg';
  }

  constance() {
    this.person = 'Constance Wu Tweeted:';
    this.queryPerson ='constancewu';
    this.tweetImage = '/assets/constance.jpg';
  }

  gal() {
    this.person = 'Gal Gadot Tweeted:';
    this.queryPerson ='galgadot';
    this.tweetImage = '/assets/gadot.jpg';
  }

  daymond() {
    this.person = 'Daymond John Tweeted:';
    this.queryPerson ='thesharkdaymond';
    this.tweetImage = '/assets/daymond.jpg';
  }

  ben() {
    this.person = 'Ben&Jerry\'s Tweeted:';
    this.queryPerson ='benandjerrys';
    this.tweetImage = '/assets/benjerry.jpg';
  }
}

