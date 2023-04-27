import { Component } from '@angular/core';
import { EStoreProduct } from '../../../models/e-store-product.model';

@Component({
  selector: 'app-e-store-cart-page',
  templateUrl: './e-store-cart-page.component.html',
  styleUrls: ['./e-store-cart-page.component.scss']
})
export class EStoreCartPageComponent {
  items: any = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 30 }
  ];

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  removeItem(item: any): void {
    this.items = this.items.filter(i => i !== item);
  }
}
