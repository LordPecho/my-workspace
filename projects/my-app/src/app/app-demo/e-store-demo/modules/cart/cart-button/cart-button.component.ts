// ANGULAR
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {

   // GET CART SIZE
   public get cartSize() {
    const products = JSON.parse(localStorage.getItem('products'));
    const cartCount = products.length;
    return cartCount;
  }

}
