// API
import { INGXGithubLink } from './ngx-github-link.model';

export interface INGXGithubLinks {
  self: INGXGithubLink;
  html: INGXGithubLink;
  issue: INGXGithubLink;
  comments: INGXGithubLink;
  review_comments: INGXGithubLink;
  review_comment: INGXGithubLink;
  commits: INGXGithubLink;
  statuses: INGXGithubLink;
}
