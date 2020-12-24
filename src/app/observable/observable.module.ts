import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TutorialComponent],
  imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
  exports: [TutorialComponent],
})
export class ObservableModule {}
