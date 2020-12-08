import {
  Component,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubRepository } from '../../model/github.repository.model';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github-smart',
  templateUrl: './github-smart.component.html',
  styleUrls: ['./github-smart.component.less'],
})
export class GithubSmartComponent
  implements AfterViewInit, OnChanges, OnInit, OnDestroy {
  data: GithubRepository[];
  subscription: Subscription;
  loading: boolean = false;
  error: string = '';

  constructor(private githubService: GithubService) {}

  refresh() {
    this.subscription = this.githubService.getRepositories().subscribe(
      (res) => {
        this.data = res.data;
        this.loading = res.loading;
      },
      (error) => {
        console.error(`${error}`);
        this.error = error?.message ?? 'network error';
      }
    );
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
