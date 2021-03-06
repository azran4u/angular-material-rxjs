import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Counter } from '../model/counter.model';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private apollo: Apollo) {}

  getCounter(): Observable<ApolloQueryResult<Counter>> {
    return this.apollo.use('counter').query<Counter>({
      query: gql`
        query getCounter {
          getCounter {
            value
          }
        }
      `,
    });
  }

  counterChanges(): Observable<FetchResult<Counter>> {
    return EMPTY;
    // return this.apollo.use('counter').subscribe({
    //   query: gql`
    //     subscription counterChanged {
    //       counterChanged {
    //         value
    //       }
    //     }
    //   `,
    // });
  }

  increment(): Observable<FetchResult<Counter>> {
    const mutation = gql`
      mutation incrementCounter {
        incrementCounter {
          value
        }
      }
    `;
    return this.apollo.use('counter').mutate<Counter>({
      mutation: mutation,
    });
  }

  decrement(): Observable<FetchResult<Counter>> {
    const mutation = gql`
      mutation decrementCounter {
        decrementCounter {
          value
        }
      }
    `;
    return this.apollo.use('counter').mutate<Counter>({
      mutation: mutation,
    });
  }

  reset(): Observable<FetchResult<Counter>> {
    const mutation = gql`
      mutation resetCounter {
        resetCounter {
          value
        }
      }
    `;
    return this.apollo.use('counter').mutate<Counter>({
      mutation: mutation,
    });
  }
}
