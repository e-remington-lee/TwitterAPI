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
  }

  random() {
    this.data.getRandom(this.queryPerson).subscribe(data => {
      this.randomTweet = data;
      console.log(data)
  })
  }

  elon() {
    this.person = 'Elon Musk';
    this.queryPerson ='elonmusk';
  }

  constance() {
    this.person = 'Constance Wu';
    this.queryPerson ='constancewu';
  }

}

