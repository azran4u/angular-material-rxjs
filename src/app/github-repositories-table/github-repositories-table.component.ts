import {
  Component,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GithubRepository } from '../model/github.repository.model';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github-repositories-table',
  templateUrl: './github-repositories-table.component.html',
  styleUrls: ['./github-repositories-table.component.less'],
})
export class GithubRepositoriesTableComponent
  implements AfterViewInit, OnChanges {
  dataSource: MatTableDataSource<GithubRepository>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'author', 'numOfCommits', 'size'];

  constructor(private githubService: GithubService) {
    this.updateTableData();
  }

  updateTableData() {
    this.dataSource = new MatTableDataSource(
      this.githubService.getRepositories()
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateTableData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
