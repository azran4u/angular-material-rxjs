import { createAction, props } from '@ngrx/store';

export interface GetAllUsersProps {
  initialLetter: string;
}

export const getUserData = createAction<string, GetAllUsersProps>(
  `[User] getData`,
  props<GetAllUsersProps>()
);
