import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTweetComponent } from './random-tweet.component';

describe('RandomTweetComponent', () => {
  let component: RandomTweetComponent;
  let fixture: ComponentFixture<RandomTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
