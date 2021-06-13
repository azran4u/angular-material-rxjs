import { User } from '../model/user.model';

export interface UsersState {
  users: Map<string, User>;
}

