import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomTweetComponent } from './random-tweet/random-tweet.component';
import { TwitterSearchComponent } from './twitter-search/twitter-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'TwitterSearch', component: TwitterSearchComponent},
  { path: 'RandomTweet', component: RandomTweetComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
