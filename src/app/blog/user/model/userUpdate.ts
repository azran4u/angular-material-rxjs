import { User } from './user.model';

export interface UserUpdate {
  updated: User[];
  deleted: string[];
}
