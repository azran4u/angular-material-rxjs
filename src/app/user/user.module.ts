import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserItemComponent } from './view-user-item/view-user-item.component';
import { UserSmartComponent } from './user-smart/user-smart.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { GraphqlModule } from './graphql/graphql.module';

@NgModule({
  declarations: [ViewUserItemComponent, UserSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    GraphqlModule,
  ],
  providers: [UserService],
  exports: [UserSmartComponent],
})
export class UserModule {}
