import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CountStore } from '../store/count.model';
import { decrement, increment, reset } from '../store/counter.actions';
import { getCounter } from '../store/counter.selector';

@Component({
  selector: 'app-smart-one',
  templateUrl: './smart-one.component.html',
  styleUrls: ['./smart-one.component.less'],
})
export class SmartOneComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<CountStore>) {
    this.count$ = this.store.select(getCounter).pipe(delay(1000));
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
