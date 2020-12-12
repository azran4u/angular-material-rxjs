import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logout-controller',
  templateUrl: './logout-controller.component.html',
  styleUrls: ['./logout-controller.component.less'],
})
export class LogoutControllerComponent implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.login.logout();
  }
}
