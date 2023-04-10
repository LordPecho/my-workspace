// ANGULAR
import { Component, Input } from '@angular/core';

//API
import { EStoreProduct } from '../../../models/e-store-product.model';

@Component({
  selector: 'app-e-store-shop-product-mat-card',
  templateUrl: './e-store-shop-product-mat-card.component.html',
  styleUrls: ['./e-store-shop-product-mat-card.component.scss']
})
export class EStoreShopProductMatCardComponent {
  // NOTE
  // MAT CARD FOR PRODUCTS
  // VAR
  @Input() data: EStoreProduct;


}
