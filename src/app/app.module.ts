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
import { LogoutControllerComponent } from './login/logout-controller/logout-controller.component';
import { UserModule } from './user/user.module';
import { UserSmartComponent } from './user/user-smart/user-smart.component';

const routes: Routes = [
  {
    path: 'github',
    pathMatch: 'full',
    component: GithubSmartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    pathMatch: 'full',
    component: UserSmartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginSmartComponent,
  },
  {
    path: 'logout',
    pathMatch: 'full',
    component: LogoutControllerComponent,
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
    UserModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
