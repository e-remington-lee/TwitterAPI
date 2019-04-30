import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  tweet: Array<string>;
  jsonTweet: JSON;
  searchQuery: String;

  constructor(private data: DataService) { }

  ngOnInit() {
  };

  onEnter(){ 


    this.data.getSearch(this.searchQuery).subscribe(data => {
      this.jsonTweet = data;

      this.tweet = this.jsonTweet.map(this.tweet => data[0].text);

      // for (let n=0; n < 5; n++){
      //   this.tweet.push(data[n].text)
      // }
      // console.log(this.tweet);
      // console.log(data);
    })
  };

}
