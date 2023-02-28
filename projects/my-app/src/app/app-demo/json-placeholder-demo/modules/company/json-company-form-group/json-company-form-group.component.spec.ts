import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCompanyFormGroupComponent } from './json-company-form-group.component';

describe('JsonCompanyFormGroupComponent', () => {
  let component: JsonCompanyFormGroupComponent;
  let fixture: ComponentFixture<JsonCompanyFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonCompanyFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonCompanyFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
