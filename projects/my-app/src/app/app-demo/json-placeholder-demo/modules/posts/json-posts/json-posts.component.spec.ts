import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPostsComponent } from './json-posts.component';

describe('JsonPostsComponent', () => {
  let component: JsonPostsComponent;
  let fixture: ComponentFixture<JsonPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
