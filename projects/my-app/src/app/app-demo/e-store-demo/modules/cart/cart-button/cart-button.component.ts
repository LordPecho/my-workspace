// ANGULAR
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent {
  constructor(private router: Router) {}

  // GET CART SIZE
  public get cartSize() {
    const products = JSON.parse(localStorage.getItem('products'));
    const cartCount = products.length;
    return cartCount;
  }

  // NAVIGATE
  public navigate() {
    this.router.navigate(['/', 'e-store', 'cart']);
  }
}
