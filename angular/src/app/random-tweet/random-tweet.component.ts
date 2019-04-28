import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-random-tweet',
  templateUrl: './random-tweet.component.html',
  styleUrls: ['./random-tweet.component.scss']
})
export class RandomTweetComponent implements OnInit {

  randomTweet: Object;
  queryPerson: String;
  person: String;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.person ='Click a Picture to View One of Their Recent Tweets!'
  }

  random() {
    this.data.getRandom(this.queryPerson).subscribe(data => {
      this.randomTweet = data;
      console.log(data)
  })
  }

  elon() {
    //images are 400x400
    this.person = 'Elon Musk Tweeted:';
    this.queryPerson ='elonmusk';
  }

  constance() {
    this.person = 'Constance Wu Tweeted:';
    this.queryPerson ='constancewu';
  }

  gal() {
    this.person = 'Gal Gadot Tweeted:';
    this.queryPerson ='galgadot';
  }

  daymond() {
    this.person = 'Daymond John Tweeted:';
    this.queryPerson ='thesharkdaymond';
  }

  ben() {
    this.person = 'Ben&Jerry\'s Tweeted:';
    this.queryPerson ='benandjerrys';
  }

}

