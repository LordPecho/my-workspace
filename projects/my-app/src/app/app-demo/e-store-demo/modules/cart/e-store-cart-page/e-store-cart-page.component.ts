// ANGULAR
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import {
  EStoreProduct,
  IEStoreProduct,
} from '../../../models/e-store-product.model';
import { EStoreProductService } from '../../../services/e-store-product.service';

class productData extends EStoreProduct {
  amount: number = 0;
}
@Component({
  selector: 'app-e-store-cart-page',
  templateUrl: './e-store-cart-page.component.html',
  styleUrls: ['./e-store-cart-page.component.scss'],
})
export class EStoreCartPageComponent implements OnInit, OnDestroy {
  // VAR
  items_: productData[] = [];

  public products: string[][] = [];

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(private productService: EStoreProductService) {}
  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
    console.log(this.products)
    this.products.forEach((item) => {
      const itemIndex: number = this.products.indexOf(item);
      this.subscription.add(
        this.productService
          .getProduct(item[0])
          .subscribe((productDom: productData) => {
            this.items_.push(new productData(productDom));
            this.items_[itemIndex].amount = (item[1] as any) as number;

          })
          );
    });
    console.log(this.items_);
  }
  getTotal(): number {
    let value: number = 0;
    this.items_.forEach((item) => {
      value += item.amount * item.price;
    });

    return value;
  }

  removeItem(item: productData): void {
    this.items_.splice(this.items_.indexOf(item), 1);
    console.log(this.items_);

    this.products.forEach((product) => {
      if (product[0] === item.id.toString()) {
        this.products.splice(this.products.indexOf(product));
      }
    });
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  // UNSUBSCRIBE
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
