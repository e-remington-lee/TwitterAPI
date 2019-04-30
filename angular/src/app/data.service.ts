import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRandom(queryPerson) {
    return this.http.get('/api/randomTweets?req='+queryPerson)
  };

  getSearch(searchQuery) {
    return this.http.get('/api/searchTweets?q='+searchQuery)
  
  };
}
