import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserFormGroupComponent } from './json-user-form-group.component';

describe('JsonUserFormGroupComponent', () => {
  let component: JsonUserFormGroupComponent;
  let fixture: ComponentFixture<JsonUserFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
