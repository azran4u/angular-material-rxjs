import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { GithubModule } from './github/github.module';
import { RoutingModule } from './routing/routing.module';
import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GraphQLModule,
    HttpClientModule,
    GithubModule,
    RoutingModule,
    HomeModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
