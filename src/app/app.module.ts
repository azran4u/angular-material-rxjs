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
import { LoginModule } from './login/login.module';
import { LoginSmartComponent } from './login/login-smart/login-smart.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'github',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    redirectTo: 'github1',
  },
  {
    path: 'github1',
    pathMatch: 'full',
    component: GithubSmartComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginSmartComponent,
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
    LoginModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
