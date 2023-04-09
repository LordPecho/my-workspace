import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreShopProductMatCardComponent } from './e-store-shop-product-mat-card.component';

describe('EStoreShopProductMatCardComponent', () => {
  let component: EStoreShopProductMatCardComponent;
  let fixture: ComponentFixture<EStoreShopProductMatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreShopProductMatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreShopProductMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
