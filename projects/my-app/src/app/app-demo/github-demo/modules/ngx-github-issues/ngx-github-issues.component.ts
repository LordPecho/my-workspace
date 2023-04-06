// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import {
  INGXGithubIssues,
  NGXGithubIssues,
} from '../../models/ngx-github-issues.model';
import { AngularMaterialIconCodeENUM } from 'my-library';

// SERVICES
import { NgxGithubService } from '../../services/ngx-github.service';
import { NGXGithubUser } from '../../models/ngx-github-user.model';

@Component({
  selector: 'ngx-github-issues',
  templateUrl: './ngx-github-issues.component.html',
  styleUrls: ['./ngx-github-issues.component.scss'],
})
export class NgxGithubIssuesComponent implements OnInit, OnDestroy {
  //ENUMS
  public get ngxIconCodeENUM(): typeof AngularMaterialIconCodeENUM {
    return AngularMaterialIconCodeENUM;
  }
  // VAR
  public issues: NGXGithubIssues[] = [];
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
        .getIssues()
        .subscribe((issues: INGXGithubIssues[]) => {
          issues.forEach((issue: INGXGithubIssues) => {
            this.issues.push(new NGXGithubIssues(issue));
            this.countClosedOpenedRequests(issue.state);
            if (!this.userNameChecker.includes(issue.user.login)) {
              this.userNameChecker.push(issue.user.login);
              this.userList.push(issue.user);
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
