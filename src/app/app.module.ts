import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { GithubModule } from './github/github.module';
import { RouterModule, Routes } from '@angular/router';
import { GithubSmartComponent } from './github/smart/github-smart/github-smart.component';

const routes: Routes = [
  {
    path: 'github',
    pathMatch: 'full',
    component: GithubSmartComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    GraphQLModule,
    HttpClientModule,
    GithubModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
