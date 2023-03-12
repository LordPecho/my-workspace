import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubIssuesComponent } from './ngx-github-issues.component';

describe('NgxGithubIssuesComponent', () => {
  let component: NgxGithubIssuesComponent;
  let fixture: ComponentFixture<NgxGithubIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
