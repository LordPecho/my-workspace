// API

import { IEntityBaseDOM, updateObject } from 'projects/my-library/src/public-api';
import { INGXGithubLabel } from './ngx-github-labels.model';
import { INGXGithubMilestone } from './ngx-github-milestone.model';
import { INGXGithubUser } from './ngx-github-user.model';

export interface INGXGithubIssues {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: INGXGithubUser;
  labels: INGXGithubLabel[];
  assignee: INGXGithubUser;
  assignees: INGXGithubUser[];
  milestone: INGXGithubMilestone;
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  pull_request: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
  closed_at: Date;
  created_at: Date;
  updated_at: Date;
  closed_by: INGXGithubUser;
  author_association: string;
  state_reason: string;
}

export class NGXGithubIssues
  implements INGXGithubIssues, IEntityBaseDOM<INGXGithubIssues>
{
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: INGXGithubUser;
  labels: INGXGithubLabel[];
  assignee: INGXGithubUser;
  assignees: INGXGithubUser[];
  milestone: INGXGithubMilestone;
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  pull_request: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
  closed_at: Date;
  created_at: Date;
  updated_at: Date;
  closed_by: INGXGithubUser;
  author_association: string;
  state_reason: string;

  constructor(data: INGXGithubIssues) {
    this.patchValues(data);
  }
  patchValues(data: INGXGithubIssues): void {
    updateObject(this, data);
  }
}
