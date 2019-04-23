import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  searchBar(){
    this.data.onEnter()
  };

}
