import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCommentOverviewComponent } from './json-comment-overview.component';

describe('JsonCommentOverviewComponent', () => {
  let component: JsonCommentOverviewComponent;
  let fixture: ComponentFixture<JsonCommentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonCommentOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonCommentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
