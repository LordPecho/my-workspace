import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubSecurityComponent } from './ngx-github-security.component';

describe('NgxGithubSecurityComponent', () => {
  let component: NgxGithubSecurityComponent;
  let fixture: ComponentFixture<NgxGithubSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
