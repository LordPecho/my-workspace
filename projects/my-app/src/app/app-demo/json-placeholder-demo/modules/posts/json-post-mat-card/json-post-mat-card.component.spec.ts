import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPostMatCardComponent } from './json-post-mat-card.component';

describe('JsonPostMatCardComponent', () => {
  let component: JsonPostMatCardComponent;
  let fixture: ComponentFixture<JsonPostMatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPostMatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPostMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
