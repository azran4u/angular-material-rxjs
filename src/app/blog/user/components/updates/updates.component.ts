import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.less'],
})
export class UpdatesComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService
      .subscribeToUsersInAgeRange()
      .pipe(
        map((value) => {
          console.log(JSON.stringify(value, null, 4));
        }),
        catchError((error, caught) => {
          console.error(error);
          return of(error);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
