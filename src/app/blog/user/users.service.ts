import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apollo: Apollo) {}

  subscribeToUsersInAgeRange(): Observable<
    FetchResult<{ updated: string[]; deleted: string[] }>
  > {
    console.log(`subscribe to userChangesByIds`);
    return this.apollo.use('user').subscribe({
      query: gql`
        subscription userChangesByIds {
          usersChanges(
            filter: { age: { from: 3, to: 5 }, ids: ["user1", "user2"] }
          ) {
            updated
            deleted
          }
        }
      `,
      errorPolicy: 'all',
    });
  }
}
