import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAddressFormGroupComponent } from './json-address-form-group.component';

describe('JsonAddressFormGroupComponent', () => {
  let component: JsonAddressFormGroupComponent;
  let fixture: ComponentFixture<JsonAddressFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAddressFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonAddressFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
