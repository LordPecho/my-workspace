import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserTodosComponent } from './json-user-todos.component';

describe('JsonUserTodosComponent', () => {
  let component: JsonUserTodosComponent;
  let fixture: ComponentFixture<JsonUserTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
