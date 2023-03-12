import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubInsightComponent } from './ngx-github-insight.component';

describe('NgxGithubInsightComponent', () => {
  let component: NgxGithubInsightComponent;
  let fixture: ComponentFixture<NgxGithubInsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubInsightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
