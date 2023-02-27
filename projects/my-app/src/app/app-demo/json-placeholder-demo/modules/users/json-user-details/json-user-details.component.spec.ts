import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserDetailsComponent } from './json-user-details.component';

describe('JsonUserDetailsComponent', () => {
  let component: JsonUserDetailsComponent;
  let fixture: ComponentFixture<JsonUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
