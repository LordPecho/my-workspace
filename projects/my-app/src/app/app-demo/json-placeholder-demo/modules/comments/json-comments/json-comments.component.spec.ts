import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCommentsComponent } from './json-comments.component';

describe('JsonCommentsComponent', () => {
  let component: JsonCommentsComponent;
  let fixture: ComponentFixture<JsonCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
