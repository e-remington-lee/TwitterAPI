import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRandom(queryPerson) {
    const options = { params: new HttpParams().set('req', queryPerson) };
    return this.http.get('/api/randomTweets?', options);
  };

  getSearch(searchQuery) {
    const options = { params: new HttpParams().set('q', searchQuery) };
    return this.http.get('/api/searchTweets?', options);
  };
};
