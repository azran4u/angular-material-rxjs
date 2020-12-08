import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloClientOptions } from '@apollo/client/core';
import { setContext } from 'apollo-link-context';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ConfigService } from './services/config.service';

const uri = '';

// class ApolloConfig {
//   constructor(private config: ConfigService) {}

//   public getFactoryFn() {
//     const { url, token } = this.config.getGithubConfig();
//     return function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//       const http = httpLink.create({
//         uri: url,
//         headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
//       });

//       const cache = new InMemoryCache();

//       return {
//         link: http,
//         cache,
//       };
//     };
//   }
// }

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
