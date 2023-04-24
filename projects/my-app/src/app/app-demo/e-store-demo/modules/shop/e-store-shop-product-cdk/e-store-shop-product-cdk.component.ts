// ANGULAR
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import { EStoreProductService } from '../../../services/e-store-product.service';
import { EStoreProduct } from '../../../models/e-store-product.model';

@Component({
  selector: 'app-e-store-shop-product-cdk',
  templateUrl: './e-store-shop-product-cdk.component.html',
  styleUrls: ['./e-store-shop-product-cdk.component.scss'],
})
export class EStoreShopProductCdkComponent implements OnChanges, OnInit {
  // VAR
  @Input() itemCategory: any = undefined;
  public data: EStoreProduct[] = [];

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(private productService: EStoreProductService) {}

  // LOAD ON INIT
  ngOnInit(): void {
    console.log('log the cat' + this.itemCategory);
    if (this.itemCategory == undefined) {
      this.subscription.add(
        this.productService
          .getProducts()
          .subscribe((productDomList: EStoreProduct[]) => {
            this.data = productDomList;
          })
      );
    }
  }

  // LOAD AFTER SORT
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['itemCategory'].currentValue) {
      if (this.itemCategory == undefined || this.itemCategory === 'all') {
        this.subscription.add(
          this.productService
            .getProducts()
            .subscribe((productDomList: EStoreProduct[]) => {
              this.data = productDomList;
            })
        );
      } else {
        this.subscription.add(
          this.productService
            .getProductsByCategory(this.itemCategory)
            .subscribe((productDomList: EStoreProduct[]) => {
              this.data = productDomList;
            })
        );
      }
    }
  }
}
