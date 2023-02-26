// API
import { INGXEntityBaseDOM, updateObject } from 'ngx-core-lib';
import { INGXGithubUser } from './ngx-github-user.model';

export interface INGXGithubProject {
  owner_url: string;
  url: string;
  html_url: string;
  columns_url: string;
  id: number;
  node_id: string;
  name: string;
  body: string;
  number: number;
  state: string;
  creator: INGXGithubUser;
  created_at: Date;
  updated_at: Date;
}

export class NGXGithubProject
  implements INGXGithubProject, INGXEntityBaseDOM<INGXGithubProject>
{
  owner_url: string;
  url: string;
  html_url: string;
  columns_url: string;
  id: number;
  node_id: string;
  name: string;
  body: string;
  number: number;
  state: string;
  creator: INGXGithubUser;
  created_at: Date;
  updated_at: Date;

  constructor(data: INGXGithubProject) {
    this.patchValues(data);
  }
  patchValues(data: INGXGithubProject): void {
    updateObject(this, data);
  }
}
