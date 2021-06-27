import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchUsersByIds } from '../../store/user.actions';
import { UsersState } from '../../store/user.model';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.less'],
})
export class UpdatesComponent implements OnInit {
  constructor(private store: Store<UsersState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      fetchUsersByIds({
        ids: ['user1', 'user2'],
      })
    );
  }
}
