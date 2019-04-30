import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  tweet1Text: String;
  tweet1IMG: String;
  jsonTweet: Object;
  searchQuery: String;

  constructor(private data: DataService) { }

  ngOnInit() {
  };

  onEnter(){ 


    this.data.getSearch(this.searchQuery).subscribe(data => {
      this.jsonTweet = data;
      console.log(data)
      this.tweet1Text = this.jsonTweet[0].text
      this.tweet1IMG= this.jsonTweet[0].user.profile_image_url

    });
  };

}
