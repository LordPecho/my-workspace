import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialIconSelectComponent } from './angular-material-icon-select.component';

describe('AngularMaterialIconSelectComponent', () => {
  let component: AngularMaterialIconSelectComponent;
  let fixture: ComponentFixture<AngularMaterialIconSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialIconSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialIconSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
