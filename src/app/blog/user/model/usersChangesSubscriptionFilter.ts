import { AgeRange } from './ageRange';
import { Ids } from './ids';

export interface UsersChangesSubscriptionFilter {
  ids: Ids;
  age: AgeRange;
}
