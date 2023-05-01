// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

//RxJS
import { Subscription } from 'rxjs';

// API
import { EStoreProductService } from '../../../services/e-store-product.service';

@Component({
  selector: 'app-e-store-shop-page',
  templateUrl: './e-store-shop-page.component.html',
  styleUrls: ['./e-store-shop-page.component.scss'],
})
export class EStoreShopPageComponent implements OnInit, OnDestroy {
  // VAR
  categories: string[] = [];

  selectedCategory: string | undefined;
  cats = new FormControl('');

  constructor(private productService: EStoreProductService) {}

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.productService
        .getProductCategories()
        .subscribe((domCategories: string[]) => {
          this.categories = domCategories;
          this.categories.push('all');
        })
    );
  }

  // SORTING SELECT
  public selectCategory(value: HTMLSelectElement) {
    this.selectedCategory = value as unknown as string;
  }

  // UNSUBSCRIBE
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
