import { NgModule } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, split } from '@apollo/client/core';
import { ApolloClientOptions } from '@apollo/client/core';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ConfigService } from '../config/services/config.service';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

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
  const http = httpLink.create({
    uri: config.getConfig().counter.uri,
  });

  // Create a WebSocket link:
  const wsCounter = new WebSocketLink({
    uri: config.getConfig().counter.ws,
    options: {
      reconnect: true,
    },
  });

  const wsUsers = new WebSocketLink({
    uri: config.getConfig().user.ws,
    options: {
      reconnect: true,
    },
  });

  return {
    user: {
      name: 'user',
      link: split(
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsUsers,
        http
      ),
      // link: httpLink.create({ uri: config.getConfig().user.uri }),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: { fetchPolicy: 'no-cache' },
        mutate: { fetchPolicy: 'no-cache' },
        watchQuery: { fetchPolicy: 'no-cache' },
      },
    },
    counter: {
      name: 'counter',
      link: split(
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsCounter,
        http
      ),
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
