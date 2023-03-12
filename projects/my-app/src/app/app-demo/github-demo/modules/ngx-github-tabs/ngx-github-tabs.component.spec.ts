import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubTabsComponent } from './ngx-github-tabs.component';

describe('NgxGithubTabsComponent', () => {
  let component: NgxGithubTabsComponent;
  let fixture: ComponentFixture<NgxGithubTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
