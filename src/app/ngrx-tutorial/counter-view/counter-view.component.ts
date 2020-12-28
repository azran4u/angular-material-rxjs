import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.less'],
})
export class CounterViewComponent implements OnInit {
  @Input() counter: number;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
