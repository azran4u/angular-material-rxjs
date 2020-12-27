import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, fromEvent, of, Subject, BehaviorSubject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
  delay,
  concatMap,
  timeout,
  catchError,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-tutorial',
  templateUrl: './rxjs-tutorial.component.html',
  styleUrls: ['./rxjs-tutorial.component.less'],
})
export class RxjsTutorialComponent implements OnInit {
  form: FormGroup;
  input$: Observable<string>;

  constructor() {
    this.form = new FormGroup({
      inputText: new FormControl('', [
        Validators.maxLength(10),
        Validators.minLength(1),
      ]),
    });
    this.input$ = this.form.controls['inputText'].valueChanges.pipe(
      tap((value) => console.log(`input changed: ${value}`)),
      filter((value) => !this.form.get('inputText').invalid),
      tap((value) => console.log(`input changed after filter: ${value}`))
    );
  }

  search(searchTerm: string): Observable<string> {
    return of(`search result for ${searchTerm}`).pipe(delay(1000));
  }

  onSubmit() {
    if (!this.form.invalid) {
      console.log(`submit`);
    }
  }

  ngOnInit(): void {
    // this.tutorial1();
    // this.tutorial2();
    // this.tutorial3();
    // this.tutorial4();
    // this.tutorial5();
    // this.tutorial8();
  }

  onClick(event) {
    // this.tutorial6();
    // this.tutorial7();
    // this.tutorial9();
    // this.tutorial10();
    this.tutorial11();
  }

  tutorial1() {
    const button = document.getElementById('myButton');
    const myObservable$ = fromEvent(button, 'click');
    const subscription = myObservable$.subscribe((event) => console.log(event));
  }

  tutorial2() {
    const button = document.getElementById('myButton');
    const myObservable$ = fromEvent(button, 'click');
    const subscription = myObservable$.subscribe({
      // on successful emissions
      next: (event) => console.log(event),
      // on errors
      error: (error) => console.log(error),
      // called once on completion
      complete: () => console.log('complete!'),
    });
  }

  tutorial3() {
    const button = document.getElementById('myButton');
    const myObservable$ = fromEvent(button, 'click');
    const subscriptionOne = myObservable$.subscribe((event) =>
      console.log(event)
    );
    const subscriptionTwo = myObservable$.subscribe((event) =>
      console.log(event)
    );
  }

  tutorial4() {
    const button = document.getElementById('myButton');
    const myObservable$ = fromEvent(button, 'click');
    const subscription = myObservable$.subscribe((event) => console.log(event));
    subscription.unsubscribe();
  }

  tutorial5() {
    const button = document.getElementById('myButton');
    const myObservable$ = fromEvent(button, 'click');
    const subscription = myObservable$.subscribe((event) => console.log(event));
    setTimeout(() => {
      console.log('Time is up');
      subscription.unsubscribe();
    }, 5000);
  }

  tutorial6() {
    const dataSource$ = of(1, 2, 3, 4, 5);

    // subscribe to our source observable
    const subscription = dataSource$
      .pipe(
        // add 1 to each emitted value
        map((value) => value + 1)
      )
      // log: 2, 3, 4, 5, 6
      .subscribe((value) => console.log(value));
  }

  tutorial7() {
    const dataSource$ = of(1, 2, 3, 4, 5);

    // subscribe to our source observable
    const subscription = dataSource$
      .pipe(
        // only accept values 2 or greater
        filter((value) => value >= 2)
      )
      // log: 2, 3, 4, 5
      .subscribe((value) => console.log(value));
  }

  tutorial8() {
    this.input$
      .pipe(
        // wait for a 200ms pause
        debounceTime(200),
        // if the value is the same, ignore
        distinctUntilChanged(),
        // if an updated value comes through while request is still active cancel previous request and 'switch' to new observable
        switchMap((value) => this.search(value))
      )
      // create a subscription
      .subscribe((results) => {
        console.log(results);
      });
  }
  tutorial9() {
    const sub = new Subject();

    sub.next(1);
    sub.subscribe((x) => {
      console.log('Subscriber A', x);
    });
    sub.next(2); // OUTPUT => Subscriber A 2
    sub.subscribe((x) => {
      console.log('Subscriber B', x);
    });
    sub.next(3); // OUTPUT => Subscriber A 3, Subscriber B 3 (logged from both subscribers)
  }
  tutorial10() {
    const subject = new BehaviorSubject(123);

    // two new subscribers will get initial value => output: 123, 123
    subject.subscribe((value) => console.log(`Subscriber A ${value}`));
    subject.subscribe((value) => console.log(`Subscriber B ${value}`));

    // two subscribers will get new value => output: 456, 456
    subject.next(456);

    // new subscriber will get latest value (456) => output: 456
    subject.subscribe((value) => console.log(`Subscriber C ${value}`));

    // all three subscribers will get new value => output: 789, 789, 789
    subject.next(789);

    // output: 123, 123, 456, 456, 456, 789, 789, 789
  }

  makeRequest(timeToDelay) {
    return of('Request Complete!').pipe(delay(timeToDelay));
  }

  tutorial11() {
    of(4000, 3000, 2000)
      .pipe(
        concatMap((duration) =>
          this.makeRequest(duration).pipe(
            timeout(2500),
            catchError((error) => of(`Request timed out after: ${duration}`))
          )
        )
      )
      /*
       *  "Request timed out after: 4000"
       *  "Request timed out after: 3000"
       *  "Request Complete!"
       */
      .subscribe((val) => console.log(val));
  }
}
