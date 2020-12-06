import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { InMemoryCache } from '@apollo/client/core';

import { ApolloClientOptions } from '@apollo/client/core';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { HttpLinkModule } from 'apollo-angular-link-http';

const TOKEN = '3c92beacc2df5ab430562d0b8393427d21d0f864';
const uri = 'https://api.github.com/graphql';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  const http = httpLink.create({
    uri,
    headers: new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`),
  });

  // const middleware = new ApolloLink((operation, forward) => {
  //   operation.setContext({
  //     headers: new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`),
  //   });
  //   return forward(operation);
  // });

  // const link = middleware.concat(http);

  // const auth = setContext((operation, context) => ({
  //   headers: {
  //     Authorization: `Bearer ${TOKEN}`,
  //   },
  // }));

  // const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link: http,
    cache,
  };

  // return {
  //   link: httpLink.create({
  //     uri: uri,
  //     headers: {
  //       authorization: `Bearer ${TOKEN}`,
  //     },
  //   }),
  //   cache: new InMemoryCache(),
  // };
}

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
