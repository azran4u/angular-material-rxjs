import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { FetchResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getAll(): Observable<ApolloQueryResult<User[]>> {
    return this.apollo.use('user').watchQuery<User[]>({
      query: gql`
        query getAll {
          getAllUsers {
            id
            name
          }
        }
      `,
      errorPolicy: 'all',
      pollInterval: 1000,
    }).valueChanges;
  }

  delete(id: string): Observable<FetchResult<User>> {
    const mutation = gql`
      mutation remove($id: String!) {
        removeUser(id: $id) {
          id
          name
        }
      }
    `;
    return this.apollo.use('user').mutate({
      mutation: mutation,
      variables: {
        id: id,
      },
    });
  }

  edit(user: User): Observable<FetchResult<User>> {
    const mutation = gql`
      mutation edit($user: UserInput!) {
        editUser(user: $user) {
          id
          name
        }
      }
    `;
    return this.apollo.use('user').mutate({
      mutation: mutation,
      variables: {
        user: user,
      },
    });
  }
}
