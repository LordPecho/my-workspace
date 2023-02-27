// API
import { IEntityBaseDOM, updateObject } from 'my-library';
import { INGXGithubBase } from './ngx-github-base.model';
import { INGXGithubHead } from './ngx-github-head.model';
import { INGXGithubLabel } from './ngx-github-labels.model';
import { INGXGithubLinks } from './ngx-github-links.model';
import { INGXGithubMilestone } from './ngx-github-milestone.model';
import { INGXGithubRequestedTeam } from './ngx-github-requested-team.model';
import { INGXGithubUser } from './ngx-github-user.model';

export interface INGXGithubPullRequest {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: INGXGithubUser;
  body: string;
  labels: INGXGithubLabel[];
  milestone: INGXGithubMilestone;
  active_lock_reason: string;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  merged_at: Date;
  merge_commit_sha: string;
  assignee: INGXGithubUser;
  assignees: INGXGithubUser[];
  requested_reviewers: INGXGithubUser[];
  requested_teams: INGXGithubRequestedTeam[];
  head: INGXGithubHead;
  base: INGXGithubBase;
  _links: INGXGithubLinks;
  author_association: string;
  auto_merge: string;
  draft: boolean;
}

export class NGXGithubPullRequests
  implements INGXGithubPullRequest, IEntityBaseDOM<INGXGithubPullRequest>
{
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: INGXGithubUser;
  body: string;
  labels: INGXGithubLabel[];
  milestone: INGXGithubMilestone;
  active_lock_reason: string;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  merged_at: Date;
  merge_commit_sha: string;
  assignee: INGXGithubUser;
  assignees: INGXGithubUser[];
  requested_reviewers: INGXGithubUser[];
  requested_teams: INGXGithubRequestedTeam[];
  head: INGXGithubHead;
  base: INGXGithubBase;
  _links: INGXGithubLinks;
  author_association: string;
  auto_merge: string;
  draft: boolean;

  constructor(data: INGXGithubPullRequest) {
    this.patchValues(data);
  }
  patchValues(data: INGXGithubPullRequest): void {
    updateObject(this, data);
  }
}
