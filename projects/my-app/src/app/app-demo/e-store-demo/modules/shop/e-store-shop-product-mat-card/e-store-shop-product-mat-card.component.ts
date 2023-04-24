// ANGULAR
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//API
import { EStoreProduct } from '../../../models/e-store-product.model';

@Component({
  selector: 'app-e-store-shop-product-mat-card',
  templateUrl: './e-store-shop-product-mat-card.component.html',
  styleUrls: ['./e-store-shop-product-mat-card.component.scss'],
})
export class EStoreShopProductMatCardComponent {
  // MAT CARD FOR PRODUCTS
  // VAR
  @Input() data: EStoreProduct;
  constructor(private router: Router) {}

  // NAVIGATION
  public navigate(item: EStoreProduct) {
    this.router.navigate(item.routerLink);
  }
}
