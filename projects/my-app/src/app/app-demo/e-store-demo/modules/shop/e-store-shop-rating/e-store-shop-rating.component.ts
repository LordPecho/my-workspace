// ANGULAR
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-e-store-shop-rating',
  templateUrl: './e-store-shop-rating.component.html',
  styleUrls: ['./e-store-shop-rating.component.scss'],
})
export class EStoreShopRatingComponent {
  // VAR
  @Input() averageRating: number = 0;

  // GET STAR
  get stars(): string[] {
    const roundedRating = Math.round(this.averageRating * 2) / 2;
    console.log(roundedRating);
    const integerPart = Math.floor(roundedRating);
    console.log(integerPart);
    const fractionalPart = roundedRating - integerPart;
    console.log(fractionalPart);
    const stars = Array(integerPart).fill('star');
    if (fractionalPart > 0) {
      stars.push('star_half');
    }
    const emptyStars = Array(5 - stars.length).fill('star_border');
    return [...stars, ...emptyStars];
  }
}
