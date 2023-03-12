import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubProjectsComponent } from './ngx-github-projects.component';

describe('NgxGithubProjectsComponent', () => {
  let component: NgxGithubProjectsComponent;
  let fixture: ComponentFixture<NgxGithubProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
