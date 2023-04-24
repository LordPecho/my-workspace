// ANGULAR
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// RxJS
import { Subscription } from 'rxjs';
import { EStoreProduct, IEStoreProduct } from '../../../models/e-store-product.model';
import { EStoreProductService } from '../../../services/e-store-product.service';

@Component({
  selector: 'app-e-store-product-details-page',
  templateUrl: './e-store-product-details-page.component.html',
  styleUrls: ['./e-store-product-details-page.component.scss']
})
export class EStoreProductDetailsPageComponent implements OnInit {
  // VAR
  // VAR
  public productId: number;
  public data: EStoreProduct;
  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: EStoreProductService
  ){}

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe((params: Params) => {
        Object.entries(params).forEach((property: [string, any]) => {
          this[property[0]] = +property[1];
        });
        this.loadData();
      })
    );
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

}
