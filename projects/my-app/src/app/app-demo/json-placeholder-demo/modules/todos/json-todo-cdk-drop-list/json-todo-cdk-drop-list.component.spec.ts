import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTodoCdkDropListComponent } from './json-todo-cdk-drop-list.component';

describe('JsonTodoCdkDropListComponent', () => {
  let component: JsonTodoCdkDropListComponent;
  let fixture: ComponentFixture<JsonTodoCdkDropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonTodoCdkDropListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonTodoCdkDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
