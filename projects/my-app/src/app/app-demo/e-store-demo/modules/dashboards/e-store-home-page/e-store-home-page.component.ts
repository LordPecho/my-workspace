// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import { EStoreProduct } from '../../../models/e-store-product.model';
import { EStoreProductService } from '../../../services/e-store-product.service';

@Component({
  selector: 'app-e-store-home-page',
  templateUrl: './e-store-home-page.component.html',
  styleUrls: ['./e-store-home-page.component.scss'],
})
export class EStoreHomePageComponent implements OnInit, OnDestroy {
  // VAR
  public data: EStoreProduct[] = [];

  // SUBSCRITPION
  private subscription: Subscription = new Subscription();

  constructor(private productService: EStoreProductService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.productService
        .getProducts()
        .subscribe((productDomList: EStoreProduct[]) => {
          this.data = productDomList;
        })
    );
  }
  public checkRating(product: EStoreProduct) {
    if (product.rating.rate >= 4) {
      return true;
    } else {
      return false;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
