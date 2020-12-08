import {
  Component,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  OnInit,
  Input,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GithubRepository } from '../../model/github.repository.model';

@Component({
  selector: 'app-github-repositories-table',
  templateUrl: './github-repositories-table.component.html',
  styleUrls: ['./github-repositories-table.component.less'],
})
export class GithubRepositoriesTableComponent
  implements AfterViewInit, OnChanges, OnInit {
  @Input() data: GithubRepository[];
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<GithubRepository>;

  displayedColumns: string[] = ['name', 'author', 'numOfCommits', 'size'];

  constructor() {
    this.dataSource = new MatTableDataSource<GithubRepository>();
  }

  refresh() {
    this.dataSource.data = this.data;
    this.dataSource.sort = this.sort;
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
}
