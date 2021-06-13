import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxParentComponent } from './ngrx-parent/ngrx-parent.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterViewComponent } from './counter-view/counter-view.component';
import { SmartOneComponent } from './smart-one/smart-one.component';
import { SmartTwoComponent } from './smart-two/smart-two.component';
import { GraphQLModule } from '../apollo/graphql.module';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';
import {
  NgrxTutorialState,
  NGRX_TUTORIAL_FEATURE_NAME,
} from './ngrxTutorial.state';

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
    StoreModule.forFeature<NgrxTutorialState>(NGRX_TUTORIAL_FEATURE_NAME, {
      counter: counterReducer,
    }),
    GraphQLModule,
    EffectsModule.forFeature([CounterEffects]),
  ],
  exports: [NgrxParentComponent],
})
export class NgrxTutorialModule {}
