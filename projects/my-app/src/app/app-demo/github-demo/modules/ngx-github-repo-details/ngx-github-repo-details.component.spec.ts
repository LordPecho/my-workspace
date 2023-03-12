import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubRepoDetailsComponent } from './ngx-github-repo-details.component';

describe('NgxGithubRepoDetailsComponent', () => {
  let component: NgxGithubRepoDetailsComponent;
  let fixture: ComponentFixture<NgxGithubRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubRepoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
