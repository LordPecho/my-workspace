import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubRepositoryInfoComponent } from './ngx-github-repository-info.component';

describe('NgxGithubRepositoryInfoComponent', () => {
  let component: NgxGithubRepositoryInfoComponent;
  let fixture: ComponentFixture<NgxGithubRepositoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubRepositoryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubRepositoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
