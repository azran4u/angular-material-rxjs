import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepositoriesTableComponent } from './view/github-repositories-table/github-repositories-table.component';
import { GithubSmartComponent } from './smart/github-smart/github-smart.component';
import { GithubService } from './services/github.service';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSizePipe } from './pipes/file-size.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'github',
    pathMatch: 'full',
    component: GithubSmartComponent,
    children: [
      {
        path: '',
        component: GithubSmartComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    GithubRepositoriesTableComponent,
    GithubSmartComponent,
    FileSizePipe,
  ],
  providers: [GithubService],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
  ],
  exports: [GithubSmartComponent],
})
export class GithubModule {}
