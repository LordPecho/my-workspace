import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubActionsComponent } from './ngx-github-actions.component';

describe('NgxGithubActionsComponent', () => {
  let component: NgxGithubActionsComponent;
  let fixture: ComponentFixture<NgxGithubActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
