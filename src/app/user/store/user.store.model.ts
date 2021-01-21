import { User } from '../model/user.model';

export interface UsersState {
  users: User[];
}

export interface CountStore {
  count: UsersState;
}
