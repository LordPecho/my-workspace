// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// RxJS
import { Subscription } from 'rxjs';
import {
  EStoreProduct,
  IEStoreProduct,
} from '../../../models/e-store-product.model';
import { EStoreProductService } from '../../../services/e-store-product.service';

@Component({
  selector: 'app-e-store-product-details-page',
  templateUrl: './e-store-product-details-page.component.html',
  styleUrls: ['./e-store-product-details-page.component.scss'],
})
export class EStoreProductDetailsPageComponent implements OnInit, OnDestroy {
  // VAR
  public productId: number;
  public data: EStoreProduct;

  public amount: number | string = 1;

  public hasValue: boolean = false;
  public products: string[][] = [];

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: EStoreProductService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe((params: Params) => {
        Object.entries(params).forEach((property: [string, any]) => {
          this[property[0]] = +property[1];
        });
        this.loadData();
      })
    );
    if (!!localStorage.getItem('products'))
      this.products = JSON.parse(localStorage.getItem('products'));
  }

  public addToBasket(data: EStoreProduct) {
    if (this.products.length > 0) {
      this.products.forEach((item) => {
        if (item[0] === data.id.toString()) {
          const value = this.products.indexOf(item);
          this.products[value] = [data.id.toString(), this.amount.toString()];
          console.log(this.products);
          this.hasValue = true;
        }
      });
    }
    if (!this.hasValue) {
      this.products.push([data.id.toString(), this.amount.toString()]);

      console.log(localStorage.getItem('products'));
      console.log(this.products);
    }
    localStorage.setItem('products', JSON.stringify(this.products));
    console.log(this.products);
  }

  private loadData() {
    this.subscription.add(
      this.productService
        .getProduct(this.productId.toString())
        .subscribe((productDOM: IEStoreProduct) => {
          this.data = new EStoreProduct(productDOM);
          console.log(this.data);
        })
    );
  }

  // UNSUBSCRIBE
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
