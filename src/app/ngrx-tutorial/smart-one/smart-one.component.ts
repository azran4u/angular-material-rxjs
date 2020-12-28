import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { decrement, increment, reset } from '../ngrx-tutorial.actions';

@Component({
  selector: 'app-smart-one',
  templateUrl: './smart-one.component.html',
  styleUrls: ['./smart-one.component.less'],
})
export class SmartOneComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count').pipe(delay(1000));
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
