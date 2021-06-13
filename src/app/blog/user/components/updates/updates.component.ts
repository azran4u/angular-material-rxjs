import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loaded } from '../../store/user.actions';
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
      loaded({ filter: { ids: [], age: { from: 0, to: 10 } } })
    );
  }
}
