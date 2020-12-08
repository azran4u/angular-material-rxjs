import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepositoriesTableComponent } from './view/github-repositories-table/github-repositories-table.component';
import { GithubSmartComponent } from './smart/github-smart/github-smart.component';
import { GithubService } from './services/github.service';
@NgModule({
  declarations: [GithubRepositoriesTableComponent, GithubSmartComponent],
  imports: [CommonModule],
})
export class GithubModule {}
