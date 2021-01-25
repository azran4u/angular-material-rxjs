import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Counter } from '../model/counter.model';
import { CounterService } from '../service/counter.service';
import { CountStore } from '../store/count.model';
import { decrement, increment, reset } from '../store/counter.actions';
import { getCounter } from '../store/counter.selector';

@Component({
  selector: 'app-smart-one',
  templateUrl: './smart-one.component.html',
  styleUrls: ['./smart-one.component.less'],
})
export class SmartOneComponent implements OnInit, OnDestroy {
  count$: Observable<number>;
  counterSubscription: Subscription;
  intervalId: NodeJS.Timeout;

  constructor(
    private store: Store<CountStore>,
    private counterService: CounterService
  ) {
    this.count$ = this.store.select(getCounter).pipe(delay(1000));
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
    if (this.intervalId) clearInterval(this.intervalId);
  }
  ngOnInit(): void {
    this.intervalId = setInterval(async () => {
      this.counterSubscription = this.counterService.getCounter().subscribe(
        (res: ApolloQueryResult<Counter>) => {
          console.log(res.data['getCounter'].value);
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log(`complete`);
        }
      );
    }, 2000);
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
