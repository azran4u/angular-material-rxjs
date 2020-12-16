import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserItemComponent } from './view-user-item/view-user-item.component';
import { UserSmartComponent } from './user-smart/user-smart.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewUserItemComponent, UserSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [UserSmartComponent],
})
export class UserModule {}
