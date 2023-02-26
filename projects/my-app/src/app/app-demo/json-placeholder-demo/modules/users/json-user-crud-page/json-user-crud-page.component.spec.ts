import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserCrudPageComponent } from './json-user-crud-page.component';

describe('JsonUserCrudPageComponent', () => {
  let component: JsonUserCrudPageComponent;
  let fixture: ComponentFixture<JsonUserCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserCrudPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
