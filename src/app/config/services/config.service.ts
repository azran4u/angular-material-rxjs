import { Injectable } from '@angular/core';
import { GithubConfig } from '../model/github.config.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  getGithubConfig(): GithubConfig {
    return {
      url: environment.github.uri ?? '',
      token: environment.github.token ?? '',
    };
  }
}
