import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputFormControlComponent } from './filter-input-form-control.component';

describe('FilterInputFormControlComponent', () => {
  let component: FilterInputFormControlComponent;
  let fixture: ComponentFixture<FilterInputFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterInputFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterInputFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
