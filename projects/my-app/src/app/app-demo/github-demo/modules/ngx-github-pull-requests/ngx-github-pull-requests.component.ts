// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import {
  INGXGithubPullRequest,
  NGXGithubPullRequests,
} from '../../models/ngx-github-pull-request.model';
import { AngularMaterialIconCodeENUM } from 'my-library';

// SERVICES
import { NgxGithubService } from '../../services/ngx-github.service';
import { NGXGithubUser } from '../../models/ngx-github-user.model';

@Component({
  selector: 'ngx-github-pull-requests',
  templateUrl: './ngx-github-pull-requests.component.html',
  styleUrls: ['./ngx-github-pull-requests.component.scss'],
})
export class NgxGithubPullRequestsComponent implements OnInit, OnDestroy {
  //ENUMS
  public get ngxIconCodeENUM(): typeof AngularMaterialIconCodeENUM {
    return AngularMaterialIconCodeENUM;
  }

  // VAR
  public pullRequests: NGXGithubPullRequests[] = [];
  public openedRequests: number = 0;
  public closedRequests: number = 0;
  public isChecked: boolean = false;
  public state: string = 'open';

  public userList: NGXGithubUser[] = [];
  public userNameChecker: string[] = [];

  //SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(private ngxGithubService: NgxGithubService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.ngxGithubService
        .getPullRequests()
        .subscribe((pullRequests: INGXGithubPullRequest[]) => {
          pullRequests.forEach((pull: INGXGithubPullRequest) => {
            this.pullRequests.push(new NGXGithubPullRequests(pull));
            this.countClosedOpenedRequests(pull.state);
            if (!this.userNameChecker.includes(pull.user.login)) {
              this.userNameChecker.push(pull.user.login);
              this.userList.push(pull.user);
            }
          });
        })
    );
  }

  public countClosedOpenedRequests(state: string) {
    if (state === 'open') {
      this.openedRequests += 1;
    } else {
      this.closedRequests += 1;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
