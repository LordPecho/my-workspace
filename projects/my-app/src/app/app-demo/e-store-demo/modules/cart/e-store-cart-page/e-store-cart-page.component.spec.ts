import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreCartPageComponent } from './e-store-cart-page.component';

describe('EStoreCartPageComponent', () => {
  let component: EStoreCartPageComponent;
  let fixture: ComponentFixture<EStoreCartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreCartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
