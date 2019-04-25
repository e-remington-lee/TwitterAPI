import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  tweet: Object;
  searchText: String;

  constructor(private data: DataService) { }

  ngOnInit() {
  };

  onEnter(value: string){ 
    this.searchText = value;
    
    console.log(value);

    this.data.getSearch().subscribe(data => {
      this.tweet = data;
      console.log(data);
    })
  };

}
