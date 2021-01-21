import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloClientOptions } from '@apollo/client/core';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ConfigService } from '../config/services/config.service';

export function createDefaultApollo(
  httpLink: HttpLink,
  config: ConfigService
): ApolloClientOptions<any> {
  return {
    link: httpLink.create({
      uri: config.getConfig().github.uri,
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${config.getConfig().github.token}`
      ),
    }),
    cache: new InMemoryCache(),
  };
}

export function createNamedApollo(
  httpLink: HttpLink,
  config: ConfigService
): Record<string, ApolloClientOptions<any>> {
  return {
    user: {
      name: 'user',
      link: httpLink.create({ uri: config.getConfig().user.uri }),
      cache: new InMemoryCache(),
    },
    github2: {
      name: 'github2',
      link: httpLink.create({
        uri: config.getConfig().github.uri,
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${config.getConfig().github.token}`
        ),
      }),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  exports: [HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      deps: [HttpLink, ConfigService],
      useFactory: createDefaultApollo,
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      deps: [HttpLink, ConfigService],
      useFactory: createNamedApollo,
    },
  ],
})
export class GraphQLModule {}

// export function createApollo(
//   httpLink: HttpLink,
//   config: ConfigService
// ): ApolloClientOptions<any> {
//   const { url, token } = config.getGithubConfig();
//   const http = httpLink.create({
//     uri: url,
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
//   });

//   const cache = new InMemoryCache();

//   return {
//     link: http,
//     cache,
//     defaultOptions: {
//       watchQuery: {
//         errorPolicy: 'all',
//       },
//     },
//   };
// }

// @NgModule({
//   imports: [HttpClientModule],
//   exports: [HttpClientModule, HttpLinkModule],
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       useFactory: createApollo,
//       deps: [HttpLink, ConfigService],
//     },
//   ],
// })
// export class GithubGraphQLModule {}
