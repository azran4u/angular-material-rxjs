import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import _ from 'lodash';
import { UsersChangesSubscriptionFilter } from '../model/usersChangesSubscriptionFilter';
import { EntityUpdate } from '../model/entityUpdate';
import { Ids } from '../model/ids';
import { User } from '../model/user.model';

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
    } }, ids: ${this.createIdsForQuery(filter.ids)} }
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

  getUsersByIds(ids: Ids): Observable<FetchResult<{ getUsersByIds: User[] }>> {
    const query = gql`
      query getUsersByIds {
        getUsersByIds(ids: ${this.createIdsForQuery(ids)}) {
          id
          name
          age
          posts
        }
      }
    `;
    return this.apollo.use('user').subscribe({
      query,
      errorPolicy: 'all',
    });
  }

  private createIdsForQuery(ids: Ids): string {
    return `[${_.join(
      ids.map((id) => `"${id}"`),
      ','
    )}]`;
  }
}
