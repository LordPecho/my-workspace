import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreShopProductCdkComponent } from './e-store-shop-product-cdk.component';

describe('EStoreShopProductCdkComponent', () => {
  let component: EStoreShopProductCdkComponent;
  let fixture: ComponentFixture<EStoreShopProductCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreShopProductCdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreShopProductCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
