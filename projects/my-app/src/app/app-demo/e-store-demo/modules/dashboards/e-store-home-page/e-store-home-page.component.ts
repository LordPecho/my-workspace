// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import { EStoreProduct } from '../../../models/e-store-product.model';
import { EStoreProductService } from '../../../services/e-store-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-store-home-page',
  templateUrl: './e-store-home-page.component.html',
  styleUrls: ['./e-store-home-page.component.scss'],
})
export class EStoreHomePageComponent implements OnInit, OnDestroy {
  // VAR
  public data: EStoreProduct[] = [];
  public index: number = 0;
  public count: number = 0;

  // SUBSCRITPION
  private subscription: Subscription = new Subscription();

  constructor(
    private productService: EStoreProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // GET PRODUCT ONLY WITH RATING OF 4 AND OVER
    this.subscription.add(
      this.productService
        .getProducts()
        .subscribe((productDomList: EStoreProduct[]) => {
          productDomList.forEach((item: EStoreProduct) => {
            if (item.rating.rate >= 4) {
              this.data.push(item);
              this.count = this.count + 1;
            }
          });
        })
    );
  }

  // CHECK INDEX
  public checkIndex(product: EStoreProduct) {
    if (this.index === this.data.indexOf(product)) {
      return true;
    } else {
      return false;
    }
  }

  // MOVE RIGHT
  public rightButton() {
    console.log('hi');
    if (this.index < this.count - 1) {
      this.index = this.index + 1;
      console.log(this.index);
    } else {
      this.index = 0;
    }
  }

  // MOVE LEFT
  public leftButton() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.count - 1;
    }
  }

  // NAVIGATE
  public navigate(item: EStoreProduct) {
    this.router.navigate(item.routerLink);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
