import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-random-tweet',
  templateUrl: './random-tweet.component.html',
  styleUrls: ['./random-tweet.component.scss']
})
export class RandomTweetComponent implements OnInit {

  randomTweet: Object;
  person: String;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  elon() {
    this.person = 'Elon Musk'
  }

  random() {
    this.data.getRandom().subscribe(data => {
      this.randomTweet = data;
      console.log(data)
  })
}
}
