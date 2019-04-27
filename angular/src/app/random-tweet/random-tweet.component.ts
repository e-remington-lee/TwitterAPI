import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-random-tweet',
  templateUrl: './random-tweet.component.html',
  styleUrls: ['./random-tweet.component.scss']
})
export class RandomTweetComponent implements OnInit {

  randomTweet: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  random() {
    this.data.getRandom().subscribe(data => {
      this.randomTweet = data;
  })
}
}
