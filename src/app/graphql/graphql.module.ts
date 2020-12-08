import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloClientOptions } from '@apollo/client/core';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ConfigService } from '../config/services/config.service';

export function createApollo(
  httpLink: HttpLink,
  config: ConfigService
): ApolloClientOptions<any> {
  const { url, token } = config.getGithubConfig();
  const http = httpLink.create({
    uri: url,
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
  });

  const cache = new InMemoryCache();

  return {
    link: http,
    cache,
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, ConfigService],
    },
  ],
})
export class GraphQLModule {}
