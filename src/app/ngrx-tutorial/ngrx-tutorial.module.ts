import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxParentComponent } from './ngrx-parent/ngrx-parent.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer, CountStore } from './store/ngrx-tutorial.reducer';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterViewComponent } from './counter-view/counter-view.component';
import { SmartOneComponent } from './smart-one/smart-one.component';
import { SmartTwoComponent } from './smart-two/smart-two.component';

@NgModule({
  declarations: [
    NgrxParentComponent,
    CounterViewComponent,
    SmartOneComponent,
    SmartTwoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot<CountStore>({ count: counterReducer }),
  ],
  exports: [NgrxParentComponent],
})
export class NgrxTutorialModule {}
