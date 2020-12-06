import {
  Component,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { GithubRepository } from '../model/github.repository.model';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github-repositories-table',
  templateUrl: './github-repositories-table.component.html',
  styleUrls: ['./github-repositories-table.component.less'],
})
export class GithubRepositoriesTableComponent
  implements AfterViewInit, OnChanges, OnInit, OnDestroy {
  dataSource: MatTableDataSource<GithubRepository>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'author', 'numOfCommits', 'size'];
  subscription: Subscription;

  constructor(private githubService: GithubService) {
    this.dataSource = new MatTableDataSource<GithubRepository>();
  }

  refresh() {
    this.subscription = this.githubService
      .getRepositories()
      .subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnInit(): void {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  ngAfterViewInit(): void {
    this.refresh();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
