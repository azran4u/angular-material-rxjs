import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  @Output() menuClicked = new EventEmitter<void>();

  ngOnInit(): void {}

  onMenuClick() {
    this.menuClicked.emit();
  }
}
