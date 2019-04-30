import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  tweet: Object;
  jsonTweet: Object;
  searchQuery: String;

  constructor(private data: DataService) { }

  ngOnInit() {
  };

  onEnter(){ 


    this.data.getSearch(this.searchQuery).subscribe(data => {
      this.jsonTweet = data;
      for (let n=0; n < 5; n++){
        this.tweet=data[n].text
      }
      console.log(this.tweet);
      console.log(data);
    })
  };

}
