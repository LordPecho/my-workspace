import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubCodeComponent } from './ngx-github-code.component';

describe('NgxGithubCodeComponent', () => {
  let component: NgxGithubCodeComponent;
  let fixture: ComponentFixture<NgxGithubCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
