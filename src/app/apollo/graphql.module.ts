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
    counter: {
      name: 'counter',
      link: httpLink.create({ uri: config.getConfig().counter.uri }),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
        },
      },
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
