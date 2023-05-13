// ANGULAR
import { Component, Input, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import {
  EStoreProduct,
  IEStoreProduct,
} from '../../../models/e-store-product.model';
import { EStoreProductService } from '../../../services/e-store-product.service';

class productData extends EStoreProduct {
  amount: any = 0;
}
@Component({
  selector: 'app-e-store-cart-page',
  templateUrl: './e-store-cart-page.component.html',
  styleUrls: ['./e-store-cart-page.component.scss'],
})
export class EStoreCartPageComponent implements OnInit {
  // VAR
  items_: productData[] = [];

  public products: string[][] = [];

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(private productService: EStoreProductService) {}
  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));

    this.products.forEach((item) => {
      this.subscription.add(
        this.productService
          .getProduct(item[0])
          .subscribe((productDom: IEStoreProduct) => {
            this.items_.push(new productData(productDom));
            this.items_[this.products.indexOf(item)].amount =
              item[1];
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
    this.items_.splice(this.items_.indexOf(item),1);
    console.log(this.items_);

    this.products.forEach((product) => {
      if (product[0] === item.id.toString()) {
        this.products.splice(this.products.indexOf(product));
      }
    });
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
