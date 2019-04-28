import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRandom() {
    return this.http.get('/api/randomTweets', {responseType: 'text'})
  };

  getSearch(searchQuery) {
    return this.http.get('/api/searchTweets?q='+searchQuery)
  
  };
}
