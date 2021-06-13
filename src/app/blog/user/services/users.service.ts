import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import _ from 'lodash';
import { UsersChangesSubscriptionFilter } from '../model/usersChangesSubscriptionFilter';
import { EntityUpdate } from '../model/entityUpdate';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apollo: Apollo) {}

  usersSubscription(
    filter: UsersChangesSubscriptionFilter
  ): Observable<FetchResult<{ usersChanges: EntityUpdate }>> {
    console.log(`subscribe to userChangesByIds`);
    const query = gql`
    subscription userChangesByFilter {
      usersChanges(
        filter: { age: { from: ${filter.age.from}, to: ${
      filter.age.to
    } }, ids: [${_.join(
      filter.ids.map((id) => `"${id}"`),
      ','
    )}] }
      ) {
        updated
        deleted
      }
    }
  `;
    return this.apollo.use('user').subscribe({
      query,
      errorPolicy: 'all',
    });
  }
}
