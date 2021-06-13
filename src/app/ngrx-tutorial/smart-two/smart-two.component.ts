import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgrxTutorialState } from '../ngrxTutorial.state';
import { decrement, increment, reset } from '../store/counter.actions';
import { counterSelector } from '../store/counter.selector';

@Component({
  selector: 'app-smart-two',
  templateUrl: './smart-two.component.html',
  styleUrls: ['./smart-two.component.less'],
})
export class SmartTwoComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<NgrxTutorialState>) {
    this.count$ = this.store.select(counterSelector);
  }
  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
