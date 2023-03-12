//ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

// ANGULAR
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// API
import { INGXGithubPullRequest } from '../models/ngx-github-pull-request.model';
import { INGXGithubIssues } from '../models/ngx-github-issues.model';

@Injectable()
export class NgxGithubService {
  constructor(private httpClient: HttpClient) {}

  public getPullRequests(): Observable<INGXGithubPullRequest[]> {
    return this.httpClient.get<INGXGithubPullRequest[]>(
      environment.ngxGithubDemo.apiUrl + '/repos/octocat/Hello-World/pulls'
    );
  }

  public getIssues(): Observable<INGXGithubIssues[]> {
    return this.httpClient.get<INGXGithubIssues[]>(
      environment.ngxGithubDemo.apiUrl + '/repos/octocat/Hello-World/issues'
    );
  }
}
