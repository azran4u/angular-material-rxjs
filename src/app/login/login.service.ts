import { Injectable } from '@angular/core';
import { LoginData } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(login: LoginData){
    localStorage.setItem('username', login.username);
  }

  logout(username: string){
    localStorage.removeItem('username');
  }
}
