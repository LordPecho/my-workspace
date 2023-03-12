import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubPullRequestsComponent } from './ngx-github-pull-requests.component';

describe('NgxGithubPullRequestsComponent', () => {
  let component: NgxGithubPullRequestsComponent;
  let fixture: ComponentFixture<NgxGithubPullRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubPullRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubPullRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
