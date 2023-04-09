// ANGULAR
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

//RxJS
import { Subscription } from 'rxjs';

// API
import { EStoreProductService } from '../../../services/e-store-product.service';
import { EStoreProduct } from '../../../models/e-store-product.model';

@Component({
  selector: 'app-e-store-shop-page',
  templateUrl: './e-store-shop-page.component.html',
  styleUrls: ['./e-store-shop-page.component.scss'],
})
export class EStoreShopPageComponent implements OnInit {
  // VAR
  public data: EStoreProduct[] = [];
  categories: string[] = [];

  selectedCategory: string | undefined;
  cats = new FormControl('');

  constructor(private productService: EStoreProductService) {}

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  // MOVE
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (!!changes['category'].currentValue) {
  //     this.categoryMap.set(this.categoryId, new ManagerData(this.category));

  //     const query = this.activatedRoute?.snapshot?.queryParams['query'];
  //     this.queryParamsFormGroup.patchValue(!!query ? JSON.parse(query) : {});
  //   }
  // }

  ngOnInit(): void {
    this.subscription.add(
      this.productService
        .getProducts()
        .subscribe((productDomList: EStoreProduct[]) => {
          this.data = productDomList;
        })
    );
    this.subscription.add(
      this.productService
        .getProductCategories()
        .subscribe((domCategories: string[]) => {
          this.categories = domCategories;
        })
    );
  }

  // TEMP SORTING
  public selectCategory(value: HTMLSelectElement) {
    this.selectedCategory = value as unknown as string;
  }

  public checkCategory(itemCategory: string | undefined) {
    if (!!this.selectedCategory) {
      if (this.selectedCategory === itemCategory) {
        console.log('2');
        return true;
      } else {
        console.log('3');
        return false;
      }
    } else {
      console.log(this.selectedCategory);
      return true;
    }
  }
}
