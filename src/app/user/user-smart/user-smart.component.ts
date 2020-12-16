import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-smart',
  templateUrl: './user-smart.component.html',
  styleUrls: ['./user-smart.component.less'],
})
export class UserSmartComponent implements OnInit {
  user: User;
  constructor() {
    this.user = {
      name: 'hi',
      id: '1',
    };
  }

  ngOnInit(): void {}

  delete() {
    this.user = undefined;
  }
}
