import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { BlogState, BLOG_FEATURE_NAME, reducers } from './blog.state';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/store/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<BlogState>(BLOG_FEATURE_NAME, reducers),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [],
})
export class BlogModule {}
