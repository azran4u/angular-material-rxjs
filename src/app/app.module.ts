import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { GithubModule } from './github/github.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth/auth.guard';
import { UserModule } from './user/user.module';
import { ViewEncapsulationTutorialModule } from './view-encapsulation-tutorial/view-encapsulation-tutorial.module';
import { ROUTES } from './app.routs';
import { NgrxTutorialModule } from './ngrx-tutorial/ngrx-tutorial.module';
import { GraphQLModule } from './apollo/graphql.module';
import { RxjsTutorialModule } from './rxjs-tutorial/rxjs-tutorial.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    GithubModule,
    LoginModule,
    UserModule,
    ViewEncapsulationTutorialModule,
    NgrxTutorialModule,
    RxjsTutorialModule,
    GraphQLModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
