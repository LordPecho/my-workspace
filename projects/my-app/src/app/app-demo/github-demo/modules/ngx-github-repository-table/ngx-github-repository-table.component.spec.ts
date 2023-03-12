import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubRepositoryTableComponent } from './ngx-github-repository-table.component';

describe('NgxGithubRepositoryTableComponent', () => {
  let component: NgxGithubRepositoryTableComponent;
  let fixture: ComponentFixture<NgxGithubRepositoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubRepositoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubRepositoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
