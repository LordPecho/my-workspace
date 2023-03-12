import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubListCardComponent } from './ngx-github-list-card.component';

describe('NgxGithubListCardComponent', () => {
  let component: NgxGithubListCardComponent;
  let fixture: ComponentFixture<NgxGithubListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGithubListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGithubListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
