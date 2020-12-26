import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, fromEvent, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
  delay,
} from 'rxjs/operators';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.less'],
})
export class TutorialComponent implements OnInit {
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
      filter((value) => value !== '')
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

    this.tutorial8();
  }

  onClick(event) {
    // this.tutorial6();
    // this.tutorial7();
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
}
