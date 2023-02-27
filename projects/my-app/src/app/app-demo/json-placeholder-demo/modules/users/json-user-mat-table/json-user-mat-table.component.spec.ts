import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserMatTableComponent } from './json-user-mat-table.component';

describe('JsonUserMatTableComponent', () => {
  let component: JsonUserMatTableComponent;
  let fixture: ComponentFixture<JsonUserMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserMatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
