import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxParentComponent } from './ngrx-parent/ngrx-parent.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-tutorial.reducer';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgrxParentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  exports: [NgrxParentComponent],
})
export class NgrxTutorialModule {}
