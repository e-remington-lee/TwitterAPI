import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  jsonTweet: Object;
  searchQuery: string;
  showSpinner: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() { }

  onEnter(){
    this.showSpinner = true; 
    this.data.getSearch(this.searchQuery).subscribe(data => {
      this.jsonTweet = data;
      this.showSpinner = false; 
    });
  }
}
