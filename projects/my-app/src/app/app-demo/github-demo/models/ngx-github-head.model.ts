// API
import { INGXGithubRepo } from './ngx-github-repo.model';
import { INGXGithubUser } from './ngx-github-user.model';

export interface INGXGithubHead {
  label: string;
  ref: string;
  sha: string;
  user: INGXGithubUser;
  repo: INGXGithubRepo;
}
