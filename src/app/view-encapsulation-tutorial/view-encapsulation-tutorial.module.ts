import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [ParentComponent, Child1Component, Child2Component],
  imports: [CommonModule],
  exports: [ParentComponent],
})
export class ViewEncapsulationTutorialModule {}
