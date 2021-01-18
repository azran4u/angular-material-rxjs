import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { decrement, increment, reset } from '../store/ngrx-tutorial.actions';
import { CountState, CountStore } from '../store/ngrx-tutorial.reducer';

@Component({
  selector: 'app-smart-two',
  templateUrl: './smart-two.component.html',
  styleUrls: ['./smart-two.component.less'],
})
export class SmartTwoComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<CountStore>) {
    this.count$ = this.store.select('count').pipe(map((x) => x.counter));
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
