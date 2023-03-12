import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubDemoComponent } from './ngx-github-demo.component';

describe('NgxGithubDemoComponent', () => {
  let component: NgxGithubDemoComponent;
  let fixture: ComponentFixture<NgxGithubDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
