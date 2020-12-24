import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.less'],
})
export class TutorialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // tutorial1();
    // tutorial2();
    // tutorial3();
    // tutorial4();
    // tutorial5();
  }

  onClick(event) {
    // tutorial6();
    tutorial7();
  }
}

function tutorial1() {
  const button = document.getElementById('myButton');
  const myObservable = fromEvent(button, 'click');
  const subscription = myObservable.subscribe((event) => console.log(event));
}

function tutorial2() {
  const button = document.getElementById('myButton');
  const myObservable = fromEvent(button, 'click');
  const subscription = myObservable.subscribe({
    // on successful emissions
    next: (event) => console.log(event),
    // on errors
    error: (error) => console.log(error),
    // called once on completion
    complete: () => console.log('complete!'),
  });
}

function tutorial3() {
  const button = document.getElementById('myButton');
  const myObservable = fromEvent(button, 'click');
  const subscriptionOne = myObservable.subscribe((event) => console.log(event));
  const subscriptionTwo = myObservable.subscribe((event) => console.log(event));
}

function tutorial4() {
  const button = document.getElementById('myButton');
  const myObservable = fromEvent(button, 'click');
  const subscription = myObservable.subscribe((event) => console.log(event));
  subscription.unsubscribe();
}

function tutorial5() {
  const button = document.getElementById('myButton');
  const myObservable = fromEvent(button, 'click');
  const subscription = myObservable.subscribe((event) => console.log(event));
  setTimeout(() => {
    console.log('Time is up');
    subscription.unsubscribe();
  }, 5000);
}

function tutorial6() {
  const dataSource = of(1, 2, 3, 4, 5);

  // subscribe to our source observable
  const subscription = dataSource
    .pipe(
      // add 1 to each emitted value
      map((value) => value + 1)
    )
    // log: 2, 3, 4, 5, 6
    .subscribe((value) => console.log(value));
}

function tutorial7() {
  const dataSource = of(1, 2, 3, 4, 5);

  // subscribe to our source observable
  const subscription = dataSource
    .pipe(
      // only accept values 2 or greater
      filter((value) => value >= 2)
    )
    // log: 2, 3, 4, 5
    .subscribe((value) => console.log(value));
}
