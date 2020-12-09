import { Component, OnInit } from '@angular/core';
import { LoginData } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-smart',
  templateUrl: './login-smart.component.html',
  styleUrls: ['./login-smart.component.less'],
})
export class LoginSmartComponent implements OnInit {
  error: string = undefined;
  constructor(private login: LoginService) {}

  ngOnInit(): void {}

  onSubmit(login: LoginData) {
    console.log(`username = ${login?.username ?? ''}`);
    this.login.login(login);
  }
}
