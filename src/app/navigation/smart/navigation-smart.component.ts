import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-smart',
  templateUrl: './navigation-smart.component.html',
  styleUrls: ['./navigation-smart.component.less'],
})
export class NavigationSmartComponent implements OnInit {
  isNavBarOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  menuClickedEvent() {
    this.isNavBarOpen = !this.isNavBarOpen;
    console.log(`menu clicked event`);
  }

  loginEvent() {
    console.log(`login clicked event`);
  }
}
