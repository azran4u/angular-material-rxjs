import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CountState, NgrxTutorialState } from '../ngrxTutorial.state';
import { decrement, increment, reset } from '../store/counter.actions';
import { counterSelector } from '../store/counter.selector';

@Component({
  selector: 'app-smart-one',
  templateUrl: './smart-one.component.html',
  styleUrls: ['./smart-one.component.less'],
})
export class SmartOneComponent {
  count$: Observable<number>;

  constructor(private store: Store<NgrxTutorialState>) {
    this.count$ = this.store.select(counterSelector).pipe(delay(1000));
  }

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
