import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsTutorialComponent } from './rxjs-tutorial/rxjs-tutorial.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RxjsTutorialComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [RxjsTutorialComponent],
})
export class RxjsTutorialModule {}
