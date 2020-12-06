import { Injectable } from '@angular/core';
import { GithubRepository } from '../model/github.repository.model';
import { repositories } from './github.repository.mock';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor() {}

  getRepositories(): GithubRepository[] {
    return repositories;
  }
}
