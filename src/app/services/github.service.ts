import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GithubRepository } from '../model/github.repository.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';

export interface GithubQueryViewerRepository {
  name: string;
  diskUsage: number;
  owner: {
    id: string;
    login: string;
  };
  commitComments: {
    totalCount: number;
  };
  packages: {
    totalCount: number;
  };
}
export interface GithubQueryViewerResult {
  viewer: {
    id: string;
    topRepositories: {
      nodes: GithubQueryViewerRepository[];
    };
  };
}
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  repos: GithubRepository[];
  loading: boolean = false;
  error: Error;

  query = gql`
    {
      viewer {
        id
        topRepositories(
          orderBy: { field: CREATED_AT, direction: ASC }
          first: 10
        ) {
          nodes {
            name
            diskUsage
            owner {
              id
              login
            }
            commitComments {
              totalCount
            }
            packages {
              totalCount
            }
          }
        }
      }
    }
  `;

  constructor(private apollo: Apollo) {}

  getRepositories(): Observable<ApolloQueryResult<GithubRepository[]>> {
    return this.apollo
      .watchQuery<GithubQueryViewerResult>({
        query: this.query,
      })
      .valueChanges.pipe(
        map((res) => {
          return {
            ...res,
            data: res.data.viewer.topRepositories.nodes.map((v) => {
              return {
                author: v.owner.login,
                name: v.name,
                numOfCommits: 0,
                size: v.diskUsage * 1024, // KB to bytes
              } as GithubRepository;
            }),
          } as ApolloQueryResult<GithubRepository[]>;
        })
      );
  }
}
// const obs1 = obs.pipe(map((res) => res.data.viewer.topRepositories.nodes));

// const obs2 = obs1.pipe(
//   map((res) => {
//     return res.map((v) => {
//       return {
//         author: v.owner.login,
//         name: v.name,
//         numOfCommits: 0,
//         size: v.diskUsage * 1024, // KB to bytes
//       } as GithubRepository;
//     });
//   })
// );
// return obs2;
//   }
// }
// // return obs.pipe(
//   map((result) => result.data),
//   map((data) => data?.viewer?.topRepositories?.nodes),
//   map((repos) =>
//     repos.map(function (v) {
//       return {
//         author: v.owner.login,
//         name: v.name,
//         numOfCommits: 0,
//         size: v.diskUsage,
//       } as GithubRepository;
//     })
//   )
// );
// }
// }
// this.apollo
//   .watchQuery<GithubQueryViewerResult>({
//     query: this.query,
//   })
//   .valueChanges.pipe(
//     map((result) => {
//       this.loading = result.loading;
//       this.error = result?.error ?? undefined;
//       const arr = result?.data?.viewer?.topRepositories?.nodes ?? [];
//       this.repos = arr.map(function (v) {
//         return {
//           author: v.owner.login,
//           name: v.name,
//           numOfCommits: 0,
//           size: v.diskUsage,
//         } as GithubRepository;
//       });
//     })
//   );
// }
// }
