import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-smart',
  templateUrl: './user-smart.component.html',
  styleUrls: ['./user-smart.component.less'],
})
export class UserSmartComponent {
  users$: Observable<ApolloQueryResult<User[]>>;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getAll();
  }

  delete(user: User) {
    console.log(`smart delete ${JSON.stringify(user)}`);
    this.userService.delete(user.id).subscribe(
      (res) => {
        const deletedUser: User = res.data['removeUser'];
        console.log(`deleted user from backend ${JSON.stringify(deletedUser)}`);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  edit(newUser: User) {
    console.log(`smart edit user ${JSON.stringify(newUser)}`);
    this.userService.edit(newUser).subscribe(
      (res) => {
        const editedUser: User = res.data['editUser'];
        console.log(`edited user in backend ${JSON.stringify(editedUser)}`);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
