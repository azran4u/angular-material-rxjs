import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx-tutorial.actions';

@Component({
  selector: 'app-smart-two',
  templateUrl: './smart-two.component.html',
  styleUrls: ['./smart-two.component.less'],
})
export class SmartTwoComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
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
