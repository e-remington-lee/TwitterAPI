import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  users: Object;
  searchText: String;

  constructor(private data: DataService) { }

  ngOnInit() {
 
  };


  trial(value: string){ 
    this.searchText= value;
    console.log(this.searchText);
  };


}
