// ANGULAR
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import { EStoreProductService } from '../../../services/e-store-product.service';
import { EStoreProduct } from '../../../models/e-store-product.model';

class productData extends EStoreProduct{
  isInCart: boolean = false;
}

@Component({
  selector: 'app-e-store-shop-product-cdk',
  templateUrl: './e-store-shop-product-cdk.component.html',
  styleUrls: ['./e-store-shop-product-cdk.component.scss'],
})
export class EStoreShopProductCdkComponent implements OnChanges, OnInit, OnDestroy {
  // VAR
  @Input() itemCategory: any = undefined;
  public data: productData[] = [];

  private products: string[][];

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(private productService: EStoreProductService) {}

  // LOAD ON INIT
  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
    console.log('log the cat' + this.itemCategory);
    if (this.itemCategory == undefined) {
      this.subscription.add(
        this.productService
        .getProducts()
        .subscribe((productDomList: productData[]) => {
          productDomList.forEach((prod)=>{
            this.products.forEach((item)=>{
              if(item[0] == prod.id.toString()){
                prod.isInCart = true;
              }
            })

            this.data.push(prod);
          })
        })
        );
        }
    }

    // LOAD AFTER SORT
    ngOnChanges(changes: SimpleChanges): void {
      this.data =  [];
      if (!!changes['itemCategory'].currentValue) {
        if (this.itemCategory == undefined || this.itemCategory === 'all') {
          this.subscription.add(
          this.productService
          .getProducts()
          .subscribe((productDomList: productData[]) => {
            productDomList.forEach((prod)=>{
              this.products.forEach((item)=>{
                if(item[0] == prod.id.toString()){
                  prod.isInCart = true;
                }
              })

              this.data.push(prod);
            })
          })
        );
      } else {
        this.subscription.add(
          this.productService
          .getProductsByCategory(this.itemCategory)
            .subscribe((productDomList: productData[]) => {
              productDomList.forEach((prod)=>{
                this.products.forEach((item)=>{
                  if(item[0] == prod.id.toString()){
                    prod.isInCart = true;
                  }
                })

                this.data.push(prod);
              })
              console.log(productDomList)
            })
            );
          }
        }
      }
      // UNSUBSCRIBE
      ngOnDestroy(): void {
        this.subscription.unsubscribe();
      }
}
