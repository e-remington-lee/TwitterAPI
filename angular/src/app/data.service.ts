import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  onEnter() {
    return console.log('Entered')
  };
}
