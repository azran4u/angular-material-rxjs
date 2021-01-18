import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { decrement, increment, reset } from '../store/ngrx-tutorial.actions';
import { CountState, CountStore } from '../store/ngrx-tutorial.reducer';

@Component({
  selector: 'app-smart-one',
  templateUrl: './smart-one.component.html',
  styleUrls: ['./smart-one.component.less'],
})
export class SmartOneComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<CountStore>) {
    this.count$ = this.store.select('count').pipe(
      delay(1000),
      map((x) => x.counter)
    );
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
