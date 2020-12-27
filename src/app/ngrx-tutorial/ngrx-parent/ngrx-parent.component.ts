import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx-tutorial.actions';

@Component({
  selector: 'app-ngrx-parent',
  templateUrl: './ngrx-parent.component.html',
  styleUrls: ['./ngrx-parent.component.less'],
})
export class NgrxParentComponent implements OnInit {
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
